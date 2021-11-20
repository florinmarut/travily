const express = require('express')
const router = express.Router()

// import controllers
const register = require('../controllers/register-controller')

router.post('/', register);

module.exports = router;