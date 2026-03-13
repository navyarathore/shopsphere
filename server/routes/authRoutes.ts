import { Router } from 'express'
import { signup, login, logout, refresh, getMe } from '../controllers/authController'
import { verifyToken } from '../middleware/authMiddleware'

const router = Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', verifyToken, logout)
router.post('/refresh', refresh)
router.get('/me', verifyToken, getMe)

export default router
