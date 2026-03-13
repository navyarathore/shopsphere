import dotenv from 'dotenv'
dotenv.config()

import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import categoryRoutes from './routes/categoryRoutes'
import productRoutes from './routes/productRoutes'
import orderRoutes from './routes/orderRoutes'
import authRoutes from './routes/authRoutes'
import { verifyToken } from './middleware/authMiddleware'
import prisma from './config/db'

const app = express()

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', verifyToken, orderRoutes)

// Health check
app.get('/api/health', (_req: Request, res: Response) => res.json({ status: 'ok' }))

// Global error handler
app.use((err: Error & { status?: number }, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack)
  const status = err.status || 500
  res.status(status).json({ error: err.message || 'Internal Server Error' })
})

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully...')
  server.close(async () => {
    await prisma.$disconnect()
    process.exit(0)
  })
})

