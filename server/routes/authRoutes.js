const express = require('express');
const router = express.Router();
const { signup, login, logout, refresh, getMe } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', verifyToken, logout);
router.post('/refresh', refresh);
router.get('/me', verifyToken, getMe);

module.exports = router;
