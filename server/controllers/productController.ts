import { Request, Response, NextFunction } from 'express'
import prisma from '../config/db'

export const getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { search, category } = req.query as { search?: string; category?: string }

    const where: Record<string, unknown> = {}

    if (search) {
      where.name = { contains: search, mode: 'insensitive' }
    }

    if (category) {
      const trimmed = String(category).trim()
      const numericId = Number(trimmed)

      if (Number.isInteger(numericId) && trimmed !== '' && !isNaN(numericId)) {
        where.categoryId = numericId
      } else {
        where.category = { name: { equals: trimmed, mode: 'insensitive' } }
      }
    }

    const products = await prisma.product.findMany({
      where,
      orderBy: { id: 'asc' },
      select: {
        id: true,
        name: true,
        price: true,
        stock: true,
        mainImageUrl: true,
        categoryId: true,
        category: { select: { name: true } },
      },
    })

    // Flatten category name to match the existing API shape
    const result = products.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      stock: p.stock,
      main_image_url: p.mainImageUrl,
      category_id: p.categoryId,
      category_name: p.category.name,
    }))

    res.json(result)
  } catch (err) {
    next(err)
  }
}

export const getProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = parseInt(req.params.id as string, 10);

    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: { select: { id: true, name: true } },
        images: { orderBy: { sortOrder: 'asc' }, select: { id: true, imageUrl: true } },
        specifications: { orderBy: { sortOrder: 'asc' }, select: { specKey: true, specValue: true } },
        additionalInfo: { orderBy: { sortOrder: 'asc' }, select: { infoKey: true, infoValue: true } },
        reviews: {
          orderBy: [{ helpfulCount: 'desc' }, { reviewDate: 'desc' }],
          select: {
            id: true,
            reviewerName: true,
            rating: true,
            title: true,
            reviewText: true,
            verifiedPurchase: true,
            reviewDate: true,
            helpfulCount: true,
          },
        },
      },
    });

    if (!product) {
      res.status(404).json({ error: 'Product not found' })
      return
    }

    // Related products from the same category
    const relatedRaw = await prisma.product.findMany({
      where: { categoryId: product.categoryId, id: { not: id } },
      take: 6,
      select: {
        id: true,
        name: true,
        price: true,
        stock: true,
        mainImageUrl: true,
        categoryId: true,
        category: { select: { name: true } },
      },
    });

    // Shuffle in application layer to replace ORDER BY RANDOM()
    const related = relatedRaw.sort(() => Math.random() - 0.5);

    res.json({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      main_image_url: product.mainImageUrl,
      category_id: product.category.id,
      category_name: product.category.name,
      images: product.images.map((img) => ({ id: img.id, image_url: img.imageUrl })),
      specifications: product.specifications.map((s) => ({ spec_key: s.specKey, spec_value: s.specValue })),
      additionalInfo: product.additionalInfo.map((a) => ({ info_key: a.infoKey, info_value: a.infoValue })),
      reviews: product.reviews.map((r) => ({
        id: r.id,
        reviewer_name: r.reviewerName,
        rating: r.rating,
        title: r.title,
        review_text: r.reviewText,
        verified_purchase: r.verifiedPurchase,
        review_date: r.reviewDate,
        helpful_count: r.helpfulCount,
      })),
      relatedProducts: related.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        stock: p.stock,
        main_image_url: p.mainImageUrl,
        category_id: p.categoryId,
        category_name: p.category.name,
      })),
    })
  } catch (err) {
    next(err)
  }
}
