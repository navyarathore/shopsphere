# ShopSphere — Amazon-style E-commerce Clone

A full-stack e-commerce application built with React, Node/Express, and PostgreSQL.

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React 18, Vite, Tailwind CSS, React Router v6, Axios |
| Backend  | Node.js, Express 4, pg (node-postgres) |
| Database | PostgreSQL                        |

## Prerequisites

- Node.js ≥ 18
- PostgreSQL ≥ 14
- npm ≥ 9

## Database Setup

1. Create the database:
   ```bash
   createdb shopsphere
   ```

2. Run schema migrations:
   ```bash
   psql -d shopsphere -f server/db/schema.sql
   ```

3. Seed with sample data (5 categories, 27 products, gallery images):
   ```bash
   psql -d shopsphere -f server/db/seed.sql
   ```

## Running Locally

### Server

```bash
cd server
cp .env.example .env        # then edit DATABASE_URL with your credentials
npm install
npm run dev                 # starts on http://localhost:5000
```

### Client

```bash
cd client
cp .env.example .env        # adjust VITE_API_BASE_URL if needed
npm install
npm run dev                 # starts on http://localhost:5173
```

## Environment Variables

### `server/.env`

| Variable       | Description                        | Example                                          |
|----------------|------------------------------------|--------------------------------------------------|
| `PORT`         | Express port                       | `5000`                                           |
| `DATABASE_URL` | PostgreSQL connection string       | `postgresql://user:pass@localhost:5432/shopsphere` |
| `CLIENT_URL`   | Allowed CORS origin                | `http://localhost:5173`                          |

### `client/.env`

| Variable             | Description          | Example                      |
|----------------------|----------------------|------------------------------|
| `VITE_API_BASE_URL`  | Backend base URL     | `http://localhost:5000`      |

## API Reference

| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| GET    | `/api/categories`      | List all categories                  |
| GET    | `/api/products`        | List products (filter: `search`, `category`) |
| GET    | `/api/products/:id`    | Single product + gallery images      |
| POST   | `/api/orders`          | Create an order                      |
| GET    | `/api/orders/:id`      | Order details + items                |
| GET    | `/api/orders?userId=1` | Order history for default user       |

## Known Assumptions

- **No authentication** — a single hardcoded user (`id = 1`) owns all orders.
- **No payment processing** — orders are placed directly with no payment step.
- **Prices re-fetched server-side** — client-sent prices are ignored; the server always re-reads from the database to prevent tampering.
- **Stock is decremented** on successful order placement and checked inside a transaction to prevent overselling.

## Deployment

### Backend (Render / Railway)

1. Provision a PostgreSQL database and run schema + seed scripts.
2. Set environment variables: `DATABASE_URL`, `CLIENT_URL` (your Vercel URL), `PORT`.
3. Build command: `npm install` | Start command: `node server.js`.

### Frontend (Vercel / Netlify)

1. Set `VITE_API_BASE_URL` to your Render/Railway backend URL.
2. Build command: `npm run build` | Publish directory: `dist`.
