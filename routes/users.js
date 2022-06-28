const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user_controller');

console.log('user router');

router.get('/profile', usersController.profile);

module.exports = router;