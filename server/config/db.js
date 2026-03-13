'use strict';

const { PrismaClient } = require('@prisma/client');

// Re-use a single PrismaClient instance across hot-reloads in development
const prisma = global.__prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.__prisma = prisma;

module.exports = prisma;
