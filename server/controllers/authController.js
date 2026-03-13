'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/db');

const SAME_SITE = process.env.NODE_ENV === 'production' ? 'none' : 'lax';

const ACCESS_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: SAME_SITE,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 15 * 60 * 1000, // 15 minutes
};

const REFRESH_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: SAME_SITE,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

const signAccessToken = (user) =>
  jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

const signRefreshToken = (user) =>
  jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

const setTokens = (res, user) => {
  res.cookie('token', signAccessToken(user), ACCESS_COOKIE_OPTIONS);
  res.cookie('refreshToken', signRefreshToken(user), REFRESH_COOKIE_OPTIONS);
};

// POST /api/auth/signup
const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'name, email and password are required' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existing = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existing) {
      return res.status(409).json({ error: 'An account with that email already exists' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name: name.trim(), email: normalizedEmail, passwordHash },
      select: { id: true, name: true, email: true },
    });

    setTokens(res, user);
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
};

// POST /api/auth/login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'email and password are required' });
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    setTokens(res, { id: user.id, name: user.name, email: user.email });
    res.json({ user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    next(err);
  }
};

// POST /api/auth/logout
const logout = (_req, res) => {
  const clearOpts = { httpOnly: true, sameSite: SAME_SITE, secure: process.env.NODE_ENV === 'production' };
  res.clearCookie('token', clearOpts);
  res.clearCookie('refreshToken', clearOpts);
  res.json({ message: 'Logged out' });
};

// POST /api/auth/refresh
const refresh = async (req, res, next) => {
  try {
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ error: 'No refresh token' });
    }

    let payload;
    try {
      payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch {
      return res.status(401).json({ error: 'Invalid or expired refresh token' });
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: { id: true, name: true, email: true },
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    res.cookie('token', signAccessToken(user), ACCESS_COOKIE_OPTIONS);
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};

// GET /api/auth/me
const getMe = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, name: true, email: true },
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user });
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, login, logout, refresh, getMe };
