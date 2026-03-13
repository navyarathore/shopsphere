'use strict';

const prisma = require('../config/db');

const getAllCategories = async (_req, res, next) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
      select: { id: true, name: true },
    });
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllCategories };
