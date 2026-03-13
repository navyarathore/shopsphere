const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrderById,
  getOrdersByUser,
} = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/', getOrdersByUser);
router.get('/:id', getOrderById);

module.exports = router;
