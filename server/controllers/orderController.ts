import { Request, Response, NextFunction } from 'express'
import prisma from '../config/db'

interface OrderItem {
  productId: number
  quantity: number
}

interface ShippingBody {
  name: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  pincode: string
  phone: string
}

export const createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { items, shipping } = req.body as { items: OrderItem[]; shipping: ShippingBody }

  // --- Validation ---
  if (!items || !Array.isArray(items) || items.length === 0) {
    res.status(400).json({ error: 'items must be a non-empty array' })
    return
  }

  const requiredShipping: (keyof ShippingBody)[] = ['name', 'addressLine1', 'city', 'state', 'pincode', 'phone']
  const missingFields = requiredShipping.filter((f) => !shipping || !shipping[f])
  if (missingFields.length > 0) {
    res.status(400).json({ error: `Missing shipping fields: ${missingFields.join(', ')}` })
    return
  }

  try {
    const orderId = await prisma.$transaction(async (tx) => {
      // --- Re-fetch prices and stock from DB (never trust client prices) ---
      const productIds = items.map((i) => i.productId)
      const dbProducts = await tx.product.findMany({
        where: { id: { in: productIds } },
        select: { id: true, name: true, price: true, stock: true },
      })

      const productMap: Record<number, typeof dbProducts[number]> = {}
      for (const p of dbProducts) {
        productMap[p.id] = p
      }

      // --- Stock check ---
      for (const item of items) {
        const prod = productMap[item.productId]
        if (!prod) {
          throw Object.assign(new Error(`Product id ${item.productId} not found`), { status: 404 })
        }
        if (item.quantity > prod.stock) {
          throw Object.assign(
            new Error(`Insufficient stock for "${prod.name}"`),
            { status: 409 }
          )
        }
      }

      // --- Compute total ---
      const totalAmount = items.reduce((sum, item) => {
        return sum + Number(productMap[item.productId].price) * item.quantity
      }, 0)

      // --- Insert order ---
      const order = await tx.order.create({
        data: {
          userId: req.user.id,
          totalAmount,
          shippingName: shipping.name,
          shippingAddressLine1: shipping.addressLine1,
          shippingAddressLine2: shipping.addressLine2 || null,
          city: shipping.city,
          state: shipping.state,
          pincode: shipping.pincode,
          phone: shipping.phone,
          items: {
            create: items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              priceAtPurchase: productMap[item.productId].price,
            })),
          },
        },
        select: { id: true },
      })

      // --- Decrement stock ---
      for (const item of items) {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } },
        })
      }

      return order.id
    })

    res.status(201).json({ orderId })
  } catch (err) {
    next(err)
  }
}

export const getOrderById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = parseInt(req.params.id as string, 10)

    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          orderBy: { id: 'asc' },
          include: {
            product: { select: { name: true, mainImageUrl: true } },
          },
        },
      },
    })

    if (!order) {
      res.status(404).json({ error: 'Order not found' })
      return
    }

    res.json({
      id: order.id,
      user_id: order.userId,
      total_amount: order.totalAmount,
      shipping_name: order.shippingName,
      shipping_address_line1: order.shippingAddressLine1,
      shipping_address_line2: order.shippingAddressLine2,
      city: order.city,
      state: order.state,
      pincode: order.pincode,
      phone: order.phone,
      created_at: order.createdAt,
      items: order.items.map((oi) => ({
        id: oi.id,
        product_id: oi.productId,
        quantity: oi.quantity,
        price_at_purchase: oi.priceAtPurchase,
        name: oi.product.name,
        main_image_url: oi.product.mainImageUrl,
      })),
    })
  } catch (err) {
    next(err)
  }
}

export const getOrdersByUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        totalAmount: true,
        shippingName: true,
        city: true,
        state: true,
        createdAt: true,
      },
    })

    res.json(
      orders.map((o) => ({
        id: o.id,
        total_amount: o.totalAmount,
        shipping_name: o.shippingName,
        city: o.city,
        state: o.state,
        created_at: o.createdAt,
      }))
    )
  } catch (err) {
    next(err)
  }
}


