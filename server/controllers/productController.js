const pool = require('../config/db');

const getProducts = async (req, res, next) => {
  try {
    const { search, category } = req.query;
    const params = [];
    const conditions = [];

    let sql = `
      SELECT p.id, p.name, p.price, p.stock, p.main_image_url,
             p.category_id, c.name AS category_name
      FROM products p
      JOIN categories c ON p.category_id = c.id
    `;

    if (search) {
      params.push(search);
      conditions.push(`p.name ILIKE '%' || $${params.length} || '%'`);
    }

    if (category) {
      const trimmedCategory = String(category).trim();
      const numericCategoryId = Number(trimmedCategory);

      if (Number.isInteger(numericCategoryId) && trimmedCategory !== '') {
        params.push(numericCategoryId);
        conditions.push(`p.category_id = $${params.length}`);
      } else {
        params.push(trimmedCategory);
        conditions.push(`LOWER(c.name) = LOWER($${params.length})`);
      }
    }

    if (conditions.length > 0) {
      sql += ' WHERE ' + conditions.join(' AND ');
    }

    sql += ' ORDER BY p.id';

    const { rows } = await pool.query(sql, params);
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const productResult = await pool.query(
      `SELECT p.id, p.name, p.description, p.price, p.stock, p.main_image_url,
              p.category_id, c.name AS category_name
       FROM products p
       JOIN categories c ON p.category_id = c.id
       WHERE p.id = $1`,
      [id]
    );

    if (productResult.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const imagesResult = await pool.query(
      'SELECT id, image_url FROM product_images WHERE product_id = $1 ORDER BY id',
      [id]
    );

    const specificationsResult = await pool.query(
      'SELECT spec_key, spec_value FROM product_specifications WHERE product_id = $1 ORDER BY id',
      [id]
    );

    const additionalInfoResult = await pool.query(
      'SELECT info_key, info_value FROM product_additional_info WHERE product_id = $1 ORDER BY id',
      [id]
    );

    const reviewsResult = await pool.query(
      `SELECT id, reviewer_name, rating, title, review_text, verified_purchase, 
              review_date, helpful_count 
       FROM product_reviews WHERE product_id = $1 
       ORDER BY helpful_count DESC, review_date DESC`,
      [id]
    );

    // Get related products from the same category
    const relatedProductsResult = await pool.query(
      `SELECT p.id, p.name, p.price, p.stock, p.main_image_url,
              p.category_id, c.name AS category_name
       FROM products p
       JOIN categories c ON p.category_id = c.id
       WHERE p.category_id = $1 AND p.id != $2
       ORDER BY RANDOM()
       LIMIT 6`,
      [productResult.rows[0].category_id, id]
    );

    const product = {
      ...productResult.rows[0],
      images: imagesResult.rows,
      specifications: specificationsResult.rows,
      additionalInfo: additionalInfoResult.rows,
      reviews: reviewsResult.rows,
      relatedProducts: relatedProductsResult.rows
    };

    res.json(product);
  } catch (err) {
    next(err);
  }
};

module.exports = { getProducts, getProductById };
