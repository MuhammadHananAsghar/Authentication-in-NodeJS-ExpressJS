const express = require('express');
const { register, login } = require('../controllers/authController');
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/protected', protect, (req, res) => {
    res.status(200).json({ message: 'Welcome to the protected route!', user: req.user });
});

module.exports = router;