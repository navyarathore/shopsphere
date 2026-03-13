import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { CookieOptions } from 'express'
import prisma from '../config/db'

interface UserPayload {
  id: number
  name: string
  email: string
}

const SAME_SITE = process.env.NODE_ENV === 'production' ? 'none' : 'lax'

const ACCESS_COOKIE_OPTIONS: CookieOptions = {
  httpOnly: true,
  sameSite: SAME_SITE as CookieOptions['sameSite'],
  secure: process.env.NODE_ENV === 'production',
  maxAge: 15 * 60 * 1000, // 15 minutes
}

const REFRESH_COOKIE_OPTIONS: CookieOptions = {
  httpOnly: true,
  sameSite: SAME_SITE as CookieOptions['sameSite'],
  secure: process.env.NODE_ENV === 'production',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
}

const signAccessToken = (user: UserPayload): string =>
  jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: '15m' }
  )

const signRefreshToken = (user: UserPayload): string =>
  jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET as string,
    { expiresIn: '7d' }
  )

const setTokens = (res: Response, user: UserPayload): void => {
  res.cookie('token', signAccessToken(user), ACCESS_COOKIE_OPTIONS)
  res.cookie('refreshToken', signRefreshToken(user), REFRESH_COOKIE_OPTIONS)
}

// POST /api/auth/signup
export const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, email, password } = req.body as { name: string; email: string; password: string }

    if (!name || !email || !password) {
      res.status(400).json({ error: 'name, email and password are required' })
      return
    }
    if (password.length < 6) {
      res.status(400).json({ error: 'Password must be at least 6 characters' })
      return
    }

    const normalizedEmail = email.toLowerCase().trim()

    const existing = await prisma.user.findUnique({ where: { email: normalizedEmail } })
    if (existing) {
      res.status(409).json({ error: 'An account with that email already exists' })
      return
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: { name: name.trim(), email: normalizedEmail, passwordHash },
      select: { id: true, name: true, email: true },
    })

    setTokens(res, user)
    res.status(201).json({ user })
  } catch (err) {
    next(err)
  }
}

// POST /api/auth/login
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body as { email: string; password: string }

    if (!email || !password) {
      res.status(400).json({ error: 'email and password are required' })
      return
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    })

    if (!user) {
      res.status(401).json({ error: 'Invalid email or password' })
      return
    }

    const valid = await bcrypt.compare(password, user.passwordHash)
    if (!valid) {
      res.status(401).json({ error: 'Invalid email or password' })
      return
    }

    setTokens(res, { id: user.id, name: user.name, email: user.email })
    res.json({ user: { id: user.id, name: user.name, email: user.email } })
  } catch (err) {
    next(err)
  }
}

// POST /api/auth/logout
export const logout = (_req: Request, res: Response): void => {
  const clearOpts: CookieOptions = { httpOnly: true, sameSite: SAME_SITE as CookieOptions['sameSite'], secure: process.env.NODE_ENV === 'production' }
  res.clearCookie('token', clearOpts)
  res.clearCookie('refreshToken', clearOpts)
  res.json({ message: 'Logged out' })
}

// POST /api/auth/refresh
export const refresh = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const refreshToken = req.cookies?.refreshToken as string | undefined

    if (!refreshToken) {
      res.status(401).json({ error: 'No refresh token' })
      return
    }

    let payload: { id: number }
    try {
      payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string) as { id: number }
    } catch {
      res.status(401).json({ error: 'Invalid or expired refresh token' })
      return
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: { id: true, name: true, email: true },
    })

    if (!user) {
      res.status(401).json({ error: 'User not found' })
      return
    }

    res.cookie('token', signAccessToken(user), ACCESS_COOKIE_OPTIONS)
    res.json({ ok: true })
  } catch (err) {
    next(err)
  }
}

// GET /api/auth/me
export const getMe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, name: true, email: true },
    })
    if (!user) {
      res.status(404).json({ error: 'User not found' })
      return
    }
    res.json({ user })
  } catch (err) {
    next(err)
  }
}

