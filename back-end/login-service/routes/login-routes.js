const express = require('express')

// import controller
const { login } = require('../controllers/login-controller')

// import router
const router = express.Router()

router.post('/', login);

module.exports = router;