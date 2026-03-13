# ShopSphere

A full-stack e-commerce web application built with React + TypeScript, Node.js/Express + TypeScript, PostgreSQL, and Prisma ORM. Covers the complete shopping flow — browsing products, managing a cart and wishlist, authenticating users, placing orders, and reviewing order history.

🔗 **Live demo:** https://shopsphere-scaler.vercel.app

---

## Screenshots

<table>
<tr>
  <td><img src="docs/screenshots/signup.png" alt="Cart" width="400"/></td>
  <td><img src="docs/screenshots/homepage.png" alt="Order History" width="400"/></td>
</tr>
<tr>
  <td><img src="docs/screenshots/product-detail.png" alt="Homepage" width="400"/></td>
  <td><img src="docs/screenshots/cart.png" alt="Product Detail" width="400"/></td>
</tr>
<tr>
  <td><img src="docs/screenshots/checkout.png" alt="Cart" width="400"/></td>
  <td><img src="docs/screenshots/order-history.png" alt="Order History" width="400"/></td>
</tr>
</table>

---

## Table of Contents

- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Features](#features)
- [Auth Flow](#auth-flow)
- [Database Schema](#database-schema)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

---

## Tech Stack

<table>
<tr>
<td valign="top">

**Frontend**

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| TypeScript 5 | Static typing |
| Vite 5 | Dev server and bundler |
| Tailwind CSS 3 | Utility-first styling |
| React Router v6 | Client-side routing |
| Axios | HTTP client (`withCredentials`) |
| React Context API | Auth, Cart, and Wishlist state |

</td>
<td valign="top">

**Backend**

| Technology | Purpose |
|---|---|
| Node.js + Express 4 | HTTP server and routing |
| TypeScript 5 | Static typing |
| ts-node | Run TS directly in development |
| Prisma 6 | ORM — queries and migrations |
| PostgreSQL | Relational database |
| JWT | Access + refresh token auth |
| bcrypt | Password hashing (10 rounds) |
| cookie-parser | Parse httpOnly cookies |
| dotenv | Environment variables |
| nodemon | Auto-restart in development |

</td>
</tr>
</table>

---

## Architecture

```mermaid
flowchart LR
    subgraph Vercel
        FE[React + Vite]
    end
    subgraph Render
        API[Express API]
        DB[(PostgreSQL)]
    end
    FE -- HTTPS + httpOnly cookies --> API
    API -- Prisma ORM --> DB
```

---

## Features

| Feature | Summary |
|---|---|
| **Authentication** | Sign up / log in / log out. Dual httpOnly cookie scheme: access token (15 min) + refresh token (7 days). `GET /api/auth/me` restores sessions on page load. Protected routes redirect unauthenticated users to `/login`. |
| **Product Catalogue** | 32+ products across 9 categories. Case-insensitive search and category filter (by name or id). |
| **Product Detail** | Image gallery, specifications, additional info (ASIN, dimensions, warranty), customer reviews sorted by helpfulness, and up to 6 related products. |
| **Cart** | Client-side via React Context + `localStorage` (`shopsphere_cart`). Persists across sessions. `cartCount` and `cartSubtotal` derived automatically. |
| **Wishlist** | Client-side via React Context + `localStorage` (`shopsphere_wishlist`). Toggle add/remove; move items directly to cart. |
| **Checkout** | Shipping address form with client-side validation (PIN 4–10 digits, phone 7–15 digits). Prices are never sent from the client. |
| **Order Placement** | Single Prisma transaction: validates existence and stock, computes total from DB prices, inserts order + items with `price_at_purchase`, decrements stock. Returns `{ orderId }` with `201`. |
| **Order History** | Authenticated view of all past orders (newest first) with itemised product details. |
| **Hero Banner** | 5-slide auto-advancing carousel (5 s, pauses on hover). Arrow/dot navigation, keyboard accessible, 350 ms fade. |
| **Category Showcase** | Amazon-style promo grid on the homepage with per-category product previews. |

---

## Auth Flow

```mermaid
sequenceDiagram
    participant C as Client
    participant S as Server

    C->>S: POST /api/auth/login
    S-->>C: Set token cookie (15 min) + refreshToken cookie (7 days)

    C->>S: GET /api/auth/me (valid token)
    S-->>C: 200 { user }

    Note over C,S: Access token expires after 15 minutes

    C->>S: POST /api/auth/refresh (refreshToken cookie)
    S-->>C: New token cookie

    C->>S: GET /api/auth/me (new token)
    S-->>C: 200 { user }
```

---

## Project Structure

```
shopsphere/
├── client/
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── services/api.ts
│   │   ├── context/
│   │   ├── constants/
│   │   ├── components/
│   │   └── pages/
│   └── vite.config.ts
│
└── server/
    ├── server.ts
    ├── config/db.ts
    ├── middleware/
    ├── routes/
    ├── controllers/
    └── prisma/
        ├── schema.prisma
        ├── seed.ts
        └── data/
```

---

## Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9
- **PostgreSQL** ≥ 14 running locally (or a remote connection string)

---

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/your-username/shopsphere.git
cd shopsphere
npm install --prefix server && npm install --prefix client
```

### 2. Create the database

```bash
createdb shopsphere
```

### 3. Configure environment variables

Create `server/.env`:

```env
PORT=5000
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/shopsphere
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_super_secret_key_here
JWT_REFRESH_SECRET=your_refresh_secret_key_here
NODE_ENV=development
```

### 4. Migrate and seed

```bash
cd server
npx prisma migrate deploy
npx prisma db seed
```

Seeds 9 categories and 32+ products with images, specs, and reviews. The seeder is idempotent — safe to re-run.

### 5. Start the development servers

```bash
# Terminal 1 — backend  →  http://localhost:5000
cd server && npm run dev

# Terminal 2 — frontend →  http://localhost:5173
cd client && npm run dev
```

---

## Environment Variables

**`server/.env`**

| Variable | Required | Description |
|---|---|---|
| `PORT` | No | Express port (default `5000`) |
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `CLIENT_URL` | Yes | CORS allowed origin (e.g. `http://localhost:5173`) |
| `JWT_SECRET` | Yes | Secret for signing access tokens |
| `JWT_REFRESH_SECRET` | Yes | Secret for signing refresh tokens |
| `NODE_ENV` | No | Set to `production` for `Secure` + `SameSite=none` cookies |

**`client/.env`**

| Variable | Required | Description |
|---|---|---|
| `VITE_API_BASE_URL` | No | Backend base URL (default `http://localhost:5000`) |

---

## Deployment

### Backend — Render

1. Create a new **Web Service** and connect the repository. Set the root directory to `server`.
2. Set environment variables: `DATABASE_URL`, `CLIENT_URL`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `PORT`, `NODE_ENV=production`.
3. **Build command:** `npm install && npm run build && npx prisma migrate deploy && npx prisma db seed`
4. **Start command:** `node dist/server.js`

### Frontend — Vercel

1. Import the repository and set the root directory to `client`.
2. Add environment variable: `VITE_API_BASE_URL` → your Render service URL.
3. **Build command:** `npm run build` · **Output directory:** `dist`
4. SPA routing is handled automatically via the included `vercel.json`.
