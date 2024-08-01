const express = require('express');
const authController = require('../controllers/authController');
const UserRepository = require('../repositories/userRepository');
const router = express.Router();

const userRepository = new UserRepository();
const controller = authController(userRepository);

router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;
