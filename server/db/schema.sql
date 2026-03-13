-- ShopSphere Database Schema
-- Run: psql -d shopsphere -f server/db/schema.sql

-- Drop tables in reverse dependency order
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS product_reviews CASCADE;
DROP TABLE IF EXISTS product_additional_info CASCADE;
DROP TABLE IF EXISTS product_specifications CASCADE;
DROP TABLE IF EXISTS product_images CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Users
CREATE TABLE users (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(100) NOT NULL,
  email         VARCHAR(150) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Categories
CREATE TABLE categories (
  id   SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

-- Products
CREATE TABLE products (
  id             SERIAL PRIMARY KEY,
  name           VARCHAR(255) NOT NULL,
  description    TEXT,
  price          NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
  stock          INT NOT NULL DEFAULT 0 CHECK (stock >= 0),
  category_id    INT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  main_image_url TEXT
);

-- Product images (additional gallery images)
CREATE TABLE product_images (
  id         SERIAL PRIMARY KEY,
  product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  image_url  TEXT NOT NULL
);

-- Product specifications (technical details)
CREATE TABLE product_specifications (
  id         SERIAL PRIMARY KEY,
  product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  spec_key   VARCHAR(100) NOT NULL,
  spec_value TEXT NOT NULL
);

-- Product additional information
CREATE TABLE product_additional_info (
  id         SERIAL PRIMARY KEY,
  product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  info_key   VARCHAR(100) NOT NULL,
  info_value TEXT NOT NULL
);

-- Product reviews
CREATE TABLE product_reviews (
  id           SERIAL PRIMARY KEY,
  product_id   INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  reviewer_name VARCHAR(100) NOT NULL,
  rating       INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title        VARCHAR(255) NOT NULL,
  review_text  TEXT NOT NULL,
  verified_purchase BOOLEAN DEFAULT false,
  review_date  DATE NOT NULL,
  helpful_count INT DEFAULT 0
);

-- Orders
CREATE TABLE orders (
  id                      SERIAL PRIMARY KEY,
  user_id                 INT NOT NULL REFERENCES users(id),
  total_amount            NUMERIC(10, 2) NOT NULL,
  shipping_name           VARCHAR(150) NOT NULL,
  shipping_address_line1  VARCHAR(255) NOT NULL,
  shipping_address_line2  VARCHAR(255),
  city                    VARCHAR(100) NOT NULL,
  state                   VARCHAR(100) NOT NULL,
  pincode                 VARCHAR(20)  NOT NULL,
  phone                   VARCHAR(20)  NOT NULL,
  created_at              TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Order items
CREATE TABLE order_items (
  id                SERIAL PRIMARY KEY,
  order_id          INT            NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id        INT            NOT NULL REFERENCES products(id),
  quantity          INT            NOT NULL CHECK (quantity > 0),
  price_at_purchase NUMERIC(10, 2) NOT NULL
);
