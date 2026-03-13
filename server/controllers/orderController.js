const pool = require('../config/db');

const createOrder = async (req, res, next) => {
  const { items, shipping } = req.body;

  // --- Validation ---
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'items must be a non-empty array' });
  }

  const requiredShipping = ['name', 'addressLine1', 'city', 'state', 'pincode', 'phone'];
  const missingFields = requiredShipping.filter((f) => !shipping || !shipping[f]);
  if (missingFields.length > 0) {
    return res.status(400).json({ error: `Missing shipping fields: ${missingFields.join(', ')}` });
  }

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // --- Re-fetch prices and stock from DB (never trust client prices) ---
    const productIds = items.map((i) => i.productId);
    const { rows: dbProducts } = await client.query(
      'SELECT id, name, price, stock FROM products WHERE id = ANY($1::int[])',
      [productIds]
    );

    const productMap = {};
    for (const p of dbProducts) {
      productMap[p.id] = p;
    }

    // --- Stock check ---
    for (const item of items) {
      const prod = productMap[item.productId];
      if (!prod) {
        await client.query('ROLLBACK');
        return res.status(404).json({ error: `Product id ${item.productId} not found` });
      }
      if (item.quantity > prod.stock) {
        await client.query('ROLLBACK');
        return res.status(409).json({ error: `Insufficient stock for "${prod.name}"` });
      }
    }

    // --- Compute total ---
    const totalAmount = items.reduce((sum, item) => {
      return sum + Number(productMap[item.productId].price) * item.quantity;
    }, 0);

    // --- Insert order ---
    const { rows: orderRows } = await client.query(
      `INSERT INTO orders
         (user_id, total_amount, shipping_name, shipping_address_line1,
          shipping_address_line2, city, state, pincode, phone)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
       RETURNING id`,
      [
        req.user.id,
        totalAmount,
        shipping.name,
        shipping.addressLine1,
        shipping.addressLine2 || null,
        shipping.city,
        shipping.state,
        shipping.pincode,
        shipping.phone,
      ]
    );

    const orderId = orderRows[0].id;

    // --- Insert order items & decrement stock ---
    for (const item of items) {
      const priceAtPurchase = productMap[item.productId].price;

      await client.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase)
         VALUES ($1, $2, $3, $4)`,
        [orderId, item.productId, item.quantity, priceAtPurchase]
      );

      await client.query(
        'UPDATE products SET stock = stock - $1 WHERE id = $2',
        [item.quantity, item.productId]
      );
    }

    await client.query('COMMIT');
    res.status(201).json({ orderId });
  } catch (err) {
    await client.query('ROLLBACK');
    next(err);
  } finally {
    client.release();
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const orderResult = await pool.query(
      `SELECT id, user_id, total_amount, shipping_name, shipping_address_line1,
              shipping_address_line2, city, state, pincode, phone, created_at
       FROM orders WHERE id = $1`,
      [id]
    );

    if (orderResult.rows.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const itemsResult = await pool.query(
      `SELECT oi.id, oi.product_id, oi.quantity, oi.price_at_purchase,
              p.name, p.main_image_url
       FROM order_items oi
       JOIN products p ON oi.product_id = p.id
       WHERE oi.order_id = $1
       ORDER BY oi.id`,
      [id]
    );

    res.json({ ...orderResult.rows[0], items: itemsResult.rows });
  } catch (err) {
    next(err);
  }
};

const getOrdersByUser = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const { rows } = await pool.query(
      `SELECT id, total_amount, shipping_name, city, state, created_at
       FROM orders WHERE user_id = $1 ORDER BY created_at DESC`,
      [userId]
    );

    res.json(rows);
  } catch (err) {
    next(err);
  }
};

module.exports = { createOrder, getOrderById, getOrdersByUser };
