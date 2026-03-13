# ShopSphere

A full-stack Amazon-style e-commerce web application built with React, Node.js/Express, PostgreSQL, and Prisma ORM. It covers the complete shopping flow — browsing products, managing a cart and wishlist, authenticating users, placing orders, and reviewing order history.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Frontend Routes](#frontend-routes)
- [Seed Data](#seed-data)
- [Security Design](#security-design)
- [Deployment](#deployment)

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite 5 | Dev server and bundler |
| Tailwind CSS 3 | Utility-first styling |
| React Router v6 | Client-side routing |
| Axios | HTTP client with `withCredentials` for cookie transport |
| React Context API | Global state for Auth, Cart, and Wishlist |

### Backend

| Technology | Purpose |
|---|---|
| Node.js + Express 4 | HTTP server and routing |
| Prisma 6 (ORM) | Type-safe database queries and migrations |
| PostgreSQL | Relational database |
| JSON Web Tokens (JWT) | Stateless authentication |
| bcrypt | Password hashing (10 salt rounds) |
| cookie-parser | Parse httpOnly cookies |
| dotenv | Environment variable management |
| nodemon | Auto-restart in development |

---

## Features

### Authentication
- **Sign up** with name, email, and password (min 6 chars). Duplicate emails are rejected with a `409`.
- **Log in** with email and password. JWT is issued and stored in an **httpOnly, SameSite=lax** cookie valid for **7 days**. In production the cookie is also marked `Secure`.
- **Log out** clears the cookie server-side.
- **Session restore** — on page load the frontend calls `GET /api/auth/me`, which reads the cookie and returns the current user so sessions survive a full page refresh with no token in `localStorage`.
- **Protected routes** on the client (`/checkout`, `/orders`, `/wishlist`, `/order-confirmation/:orderId`) redirect unauthenticated users to `/login`. A spinner is shown during the initial auth check to avoid a flash-of-redirect.

### Product Catalogue
- **32+ products** across 9 categories seeded from individual JSON files.
- **Search** by product name (case-insensitive `contains` query).
- **Filter by category** — accepts either the category `id` (integer) or the category `name` string.
- Product listing returns: `id`, `name`, `price`, `stock`, `main_image_url`, `category_id`, `category_name`.

### Product Detail Page
- **Image gallery** — main image + additional images sorted by `sort_order`.
- **Specifications table** — structured key/value pairs (e.g. brand, battery life, connectivity).
- **Additional info table** — Amazon-style metadata (ASIN, dimensions, warranty, etc.).
- **Customer reviews** — reviewer name, star rating, title, body, verified purchase badge, review date, and helpful count. Reviews are sorted by `helpfulCount DESC, reviewDate DESC`.
- **Related products** — up to 6 products from the same category (excluding the current one).

### Shopping Cart
- Managed entirely client-side via **React Context + `localStorage`** (key: `shopsphere_cart`).
- `addToCart(product, qty)` — increments quantity if the product is already in the cart.
- `updateQuantity(productId, quantity)` — removes the item if quantity drops below 1.
- `removeFromCart(productId)` and `clearCart()`.
- Derived values: `cartCount` (total units), `cartSubtotal` (price × quantity sum).
- Cart persists across page refreshes and browser sessions.

### Wishlist
- Managed client-side via **React Context + `localStorage`** (key: `shopsphere_wishlist`).
- `toggleWishlist(product)` — adds or removes in one call.
- `isWishlisted(productId)` — boolean check used to toggle the heart icon.
- Products can be moved from the wishlist directly into the cart.

### Checkout
- Form fields: full name, address line 1, address line 2 (optional), city, state, PIN code, phone number.
- **Client-side validation** — PIN code must be 4–10 digits; phone number 7–15 digits (strips spaces, dashes, and brackets before checking).
- On submit the cart is mapped to `[{ productId, quantity }]` — **no prices are sent from the client**.
- If the cart is empty the page redirects to `/cart` automatically.

### Order Placement (Server-Side)
All order logic runs inside a **single Prisma transaction**:
1. Fetch all product prices and stock levels fresh from the database.
2. Verify every product exists; return `404` otherwise.
3. Check that requested quantities do not exceed available stock; return `409 Insufficient stock` otherwise.
4. Compute `totalAmount` from DB prices — client prices are never trusted.
5. Insert the `orders` row with full shipping details.
6. Insert all `order_items` rows with `price_at_purchase` snapshotted from the DB.
7. Decrement `stock` for each product.

Returns `{ orderId }` on success with HTTP `201`.

### Order History
- Authenticated users can view all past orders sorted by `createdAt DESC`.
- Each order page shows: order ID, date, shipping address, itemised list with product images, unit prices, quantities, and the order total.

### Hero Banner
- 5 promotional slides (Electronics, Clothing, Books, Home & Kitchen, Sports & Outdoors).
- Auto-advances every **5 seconds**; pauses when the user hovers over the banner.
- Left/right arrow buttons and dot indicators for manual navigation.
- **Keyboard accessible** — arrow keys change slides when the banner is focused.
- 350 ms fade transition between slides.

### Category Showcase
- Amazon-style promo grid on the homepage showing product image previews per category.

---

## Project Structure

```
shopsphere/
├── client/                          # React + Vite frontend
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── src/
│       ├── main.jsx                 # React root; wraps app in AuthProvider, CartProvider, WishlistProvider
│       ├── App.jsx                  # Route definitions
│       ├── index.css                # Tailwind base + custom CSS variables
│       ├── services/
│       │   └── api.js               # Axios instance (baseURL from VITE_API_BASE_URL + withCredentials)
│       ├── context/
│       │   ├── AuthContext.jsx      # User state; login / logout / signup; session restore via /api/auth/me
│       │   ├── CartContext.jsx      # Cart state; persisted to localStorage
│       │   └── WishlistContext.jsx  # Wishlist state; persisted to localStorage
│       ├── constants/
│       │   └── categories.js        # Category list used in nav and filters
│       ├── components/
│       │   ├── ProtectedRoute.jsx   # Renders <Outlet> or redirects to /login
│       │   ├── layout/
│       │   │   ├── Navbar.jsx
│       │   │   └── Footer.jsx
│       │   ├── home/
│       │   │   ├── HeroBanner.jsx   # Auto-advancing promo carousel (5 slides, 5 s interval)
│       │   │   ├── CategoryShowcase.jsx
│       │   │   └── ProductRow.jsx
│       │   ├── product/
│       │   │   ├── ProductCard.jsx
│       │   │   └── ProductGrid.jsx
│       │   ├── cart/
│       │   │   └── CartItem.jsx
│       │   └── checkout/
│       │       └── AddressForm.jsx
│       └── pages/
│           ├── HomePage.jsx
│           ├── ProductDetailPage.jsx
│           ├── CartPage.jsx
│           ├── CheckoutPage.jsx
│           ├── OrderConfirmationPage.jsx
│           ├── OrderHistoryPage.jsx
│           ├── WishlistPage.jsx
│           ├── LoginPage.jsx
│           ├── SignupPage.jsx
│           └── NotFoundPage.jsx
│
└── server/                          # Express backend
    ├── server.js                    # App entry point; registers middleware, routes, and global error handler
    ├── config/
    │   └── db.js                    # Prisma client singleton (reused across hot-reloads in development)
    ├── middleware/
    │   └── authMiddleware.js        # verifyToken — reads JWT from httpOnly cookie, attaches req.user
    ├── routes/
    │   ├── authRoutes.js
    │   ├── categoryRoutes.js
    │   ├── productRoutes.js
    │   └── orderRoutes.js
    ├── controllers/
    │   ├── authController.js        # signup, login, logout, getMe
    │   ├── categoryController.js    # getCategories
    │   ├── productController.js     # getProducts (search + category filter), getProductById
    │   └── orderController.js       # createOrder (transactional), getOrderById, getOrdersByUser
    └── prisma/
        ├── schema.prisma            # All data models
        ├── seed.js                  # Idempotent seeder — reads categories.json and products/*.json
        └── data/
            ├── categories.json      # Array of category name strings
            └── products/            # One JSON file per product (32+ files)
```

---

## Database Schema

The database has 8 models managed by Prisma:

```
User
  id            Int          PK autoincrement
  name          String
  email         String       UNIQUE
  passwordHash  String
  createdAt     Timestamptz  default now()
  orders        Order[]

Category
  id            Int          PK autoincrement
  name          String       UNIQUE
  products      Product[]

Product
  id            Int          PK autoincrement
  name          String
  description   String
  price         Decimal(10,2)
  stock         Int          default 0
  categoryId    Int          FK → Category
  mainImageUrl  String
  images        ProductImage[]
  specifications ProductSpecification[]
  additionalInfo ProductAdditionalInfo[]
  reviews       ProductReview[]
  orderItems    OrderItem[]

ProductImage
  id            Int          PK autoincrement
  productId     Int          FK → Product (CASCADE delete)
  imageUrl      String
  sortOrder     Int          default 0

ProductSpecification
  id            Int          PK autoincrement
  productId     Int          FK → Product (CASCADE delete)
  specKey       String
  specValue     String
  sortOrder     Int          default 0

ProductAdditionalInfo
  id            Int          PK autoincrement
  productId     Int          FK → Product (CASCADE delete)
  infoKey       String
  infoValue     String
  sortOrder     Int          default 0

ProductReview
  id               Int          PK autoincrement
  productId        Int          FK → Product (CASCADE delete)
  reviewerName     String
  rating           Int
  title            String
  reviewText       String
  verifiedPurchase Boolean      default false
  reviewDate       Date
  helpfulCount     Int          default 0

Order
  id                   Int          PK autoincrement
  userId               Int          FK → User
  totalAmount          Decimal(10,2)
  shippingName         String
  shippingAddressLine1 String
  shippingAddressLine2 String?      (optional)
  city                 String
  state                String
  pincode              String
  phone                String
  createdAt            Timestamptz  default now()
  items                OrderItem[]

OrderItem
  id              Int          PK autoincrement
  orderId         Int          FK → Order (CASCADE delete)
  productId       Int          FK → Product
  quantity        Int
  priceAtPurchase Decimal(10,2)    ← snapshotted at time of purchase
```

---

## Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9
- **PostgreSQL** ≥ 14 running locally (or a remote connection string)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/shopsphere.git
cd shopsphere
```

### 2. Install dependencies

```bash
cd server && npm install
cd ../client && npm install
```

### 3. Create the PostgreSQL database

```bash
createdb shopsphere
```

### 4. Configure server environment variables

Create `server/.env`:

```env
PORT=5000
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/shopsphere
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_super_secret_key_here
NODE_ENV=development
```

### 5. Run Prisma migrations

```bash
cd server
npx prisma migrate deploy
```

### 6. Seed the database

```bash
node prisma/seed.js
```

This creates 9 categories and 32+ products, each with gallery images, specifications, additional info, and customer reviews. The script is idempotent — re-running it skips already-existing products.

### 7. Start the development servers

```bash
# Terminal 1 — backend  →  http://localhost:5000
cd server && npm run dev

# Terminal 2 — frontend →  http://localhost:5173
cd client && npm run dev
```

---

## Environment Variables

### `server/.env`

| Variable | Required | Description | Example |
|---|---|---|---|
| `PORT` | No | Express port (default: `5000`) | `5000` |
| `DATABASE_URL` | Yes | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/shopsphere` |
| `CLIENT_URL` | Yes | CORS allowed origin | `http://localhost:5173` |
| `JWT_SECRET` | Yes | Secret for signing JWT tokens | `a-long-random-string` |
| `NODE_ENV` | No | Set to `production` to enable `Secure` cookie flag | `development` |

### `client/.env`

| Variable | Required | Description | Example |
|---|---|---|---|
| `VITE_API_BASE_URL` | No | Backend base URL (default: `http://localhost:5000`) | `http://localhost:5000` |

---

## API Reference

All endpoints are prefixed with `/api`. Order endpoints require a valid JWT cookie (set automatically by login/signup).

### Health

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/health` | No | Returns `{ status: "ok" }` |

### Auth — `/api/auth`

| Method | Endpoint | Auth | Request Body | Response |
|---|---|---|---|---|
| POST | `/api/auth/signup` | No | `{ name, email, password }` | `201 { user }` + sets cookie |
| POST | `/api/auth/login` | No | `{ email, password }` | `200 { user }` + sets cookie |
| POST | `/api/auth/logout` | No | — | `200 { message }` + clears cookie |
| GET | `/api/auth/me` | Cookie | — | `200 { user }` |

Signup validation: `name`, `email`, `password` required; password ≥ 6 chars; duplicate email → `409`.

### Categories — `/api/categories`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/categories` | No | Returns all categories as `[{ id, name }]` |

### Products — `/api/products`

| Method | Endpoint | Auth | Query params | Description |
|---|---|---|---|---|
| GET | `/api/products` | No | `search` (string), `category` (name or id) | List products |
| GET | `/api/products/:id` | No | — | Full product detail |

**`GET /api/products` — response item shape:**
```json
{
  "id": 1,
  "name": "Wireless Noise-Cancelling Headphones",
  "price": "79.99",
  "stock": 45,
  "main_image_url": "https://...",
  "category_id": 1,
  "category_name": "Electronics"
}
```

**`GET /api/products/:id` — response shape:**
```json
{
  "id": 1,
  "name": "Wireless Noise-Cancelling Headphones",
  "description": "...",
  "price": "79.99",
  "stock": 45,
  "mainImageUrl": "https://...",
  "category": { "id": 1, "name": "Electronics" },
  "images": [{ "id": 2, "imageUrl": "https://..." }],
  "specifications": [{ "specKey": "Brand", "specValue": "AudioPro" }],
  "additionalInfo": [{ "infoKey": "Warranty", "infoValue": "2 years" }],
  "reviews": [{ "id": 1, "reviewerName": "Sarah M.", "rating": 5, "title": "...", "reviewText": "...", "verifiedPurchase": true, "reviewDate": "2024-11-15", "helpfulCount": 847 }],
  "related": [{ "id": 2, "name": "...", "price": "...", "main_image_url": "...", "category_id": 1, "category_name": "Electronics" }]
}
```

### Orders — `/api/orders` *(auth cookie required)*

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/orders` | Place a new order |
| GET | `/api/orders` | All orders for the logged-in user (newest first) |
| GET | `/api/orders/:id` | Single order with all items |

**`POST /api/orders` — request body:**
```json
{
  "items": [
    { "productId": 1, "quantity": 2 }
  ],
  "shipping": {
    "name": "Jane Doe",
    "addressLine1": "123 Main St",
    "addressLine2": "Apt 4B",
    "city": "Mumbai",
    "state": "Maharashtra",
    "pincode": "400001",
    "phone": "9876543210"
  }
}
```

**Error responses for order creation:**
- `400` — missing `items` array or required shipping fields
- `404` — a `productId` does not exist in the database
- `409` — insufficient stock for one or more products

---

## Frontend Routes

| Path | Auth Required | Page Component | Description |
|---|---|---|---|
| `/` | No | `HomePage` | Hero banner, category showcase, product rows |
| `/product/:id` | No | `ProductDetailPage` | Full product view with gallery, specs, and reviews |
| `/cart` | No | `CartPage` | Cart items, subtotal, and checkout CTA |
| `/login` | No | `LoginPage` | Email/password login form |
| `/signup` | No | `SignupPage` | Registration form |
| `/checkout` | Yes | `CheckoutPage` | Shipping address form + order summary |
| `/order-confirmation/:orderId` | Yes | `OrderConfirmationPage` | Success page after placing an order |
| `/orders` | Yes | `OrderHistoryPage` | List of all past orders |
| `/wishlist` | Yes | `WishlistPage` | Saved wishlist items with move-to-cart option |
| `*` | No | `NotFoundPage` | 404 fallback |

---

## Seed Data

The seed script (`server/prisma/seed.js`) reads from JSON files and is **idempotent** — it skips products that already exist by name.

**Categories** (`server/prisma/data/categories.json`) — 9 categories:

> Electronics · Books · Clothing · Home & Kitchen · Sports & Outdoors · Fresh · Mobiles · Toys & Games · Computers

**Products** (`server/prisma/data/products/`) — 32+ individual JSON files. Each file provides:

| Field | Description |
|---|---|
| `name`, `description`, `price`, `stock` | Core product fields |
| `category` | Category name string — matched to the `categories` table |
| `mainImageUrl` | Primary listing image URL |
| `images[]` | Additional gallery image URLs |
| `specifications[]` | `{ key, value }` pairs — brand, weight, connectivity, etc. |
| `additionalInfo[]` | `{ key, value }` pairs — ASIN, dimensions, warranty, etc. |
| `reviews[]` | Full review objects with rating, title, body, date, helpfulCount |

Product examples: wireless headphones, mechanical keyboard, 27" monitor, true-wireless earbuds, smart desk lamp, power bank, programming books (Clean Code, DDIA), self-help books (Atomic Habits), oxford shirts, yoga pants, hoodie, cookware set, cold brew maker, stand mixer, air purifier, dumbbells, resistance bands, yoga mat, running vest, camping lantern, foam roller, webcam, smartwatch, Bluetooth speaker, USB hub, portable SSD, and more.

---

## Security Design

| Concern | Implementation |
|---|---|
| Password storage | `bcrypt` with 10 salt rounds |
| Token transport | `httpOnly` cookie — invisible to JavaScript, not stored in `localStorage` |
| Cookie flags | `SameSite=lax`; `Secure` in production; `maxAge` 7 days |
| Price integrity | Server always re-fetches prices from the DB; client-sent prices are ignored entirely |
| Stock integrity | Stock check and decrement run inside a **single Prisma transaction** to prevent race conditions and overselling |
| Auth middleware | `verifyToken` reads `req.cookies.token`, verifies with `JWT_SECRET`, attaches `req.user`; returns `401` on any failure |
| CORS | Restricted to `CLIENT_URL` with `credentials: true` |
| Graceful shutdown | Express server listens for `SIGTERM`, closes connections, and disconnects Prisma before exiting |

---

## Deployment

### Backend (Render / Railway / Fly.io)

1. Provision a PostgreSQL database.
2. Set environment variables: `DATABASE_URL`, `CLIENT_URL`, `JWT_SECRET`, `PORT`, `NODE_ENV=production`.
3. **Build command:** `npm install && npx prisma migrate deploy && node prisma/seed.js`
4. **Start command:** `node server.js`

### Frontend (Vercel / Netlify)

1. Set `VITE_API_BASE_URL` to your deployed backend URL.
2. **Build command:** `npm run build`
3. **Publish directory:** `dist`
4. Add a rewrite rule `/* → /index.html` to support client-side routing.
