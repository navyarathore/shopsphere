import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies?.token

  if (!token) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET as string) as Request['user']
    next()
  } catch {
    res.status(401).json({ error: 'Unauthorized' })
  }
}
