import { Request, Response, NextFunction } from 'express'
import prisma from '../config/db'

export const getAllCategories = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
      select: { id: true, name: true },
    })
    res.json(categories)
  } catch (err) {
    next(err)
  }
}
