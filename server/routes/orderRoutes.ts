import { Router } from 'express'
import {
  createOrder,
  getOrderById,
  getOrdersByUser,
} from '../controllers/orderController'

const router = Router()

router.post('/', createOrder)
router.get('/', getOrdersByUser)
router.get('/:id', getOrderById)

export default router
