const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');

const { listUsers, getUser, deleteUser, updateUser } = require('../controllers/users-controller')

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);
router.get('/', listUsers);

module.exports = router;