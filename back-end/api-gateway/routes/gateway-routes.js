const express = require('express')

// import controller
const { login } = require('../controllers/login-controller')
const { register } = require('../controllers/register-controller')
const { listPosts, getPost, deletePost, updatePost, createPost } = require('../controllers/posts-controller');
const { listComments, getComment, deleteComment, createComment, updateComment } = require('../controllers/comments-controller');
const { listLocations, getLocation, deleteLocation, createLocation, updateLocation } = require('../controllers/locations-controller');

// import router
const router = express.Router()
const cors = require('cors');

router.use(cors());

router.post('/register', register);

router.post('/login', login);

router.route('/posts').get(listPosts).post(createPost);
router.route('/posts/:id').get(getPost).delete(deletePost).put(updatePost);

router.route('/comments').get(listComments).post(createComment);
router.route('/comments/:id').get(getComment).delete(deleteComment).put(updateComment);

router.route('/locations').get(listLocations).post(createLocation);
router.route('/locations/:id').get(getLocation).delete(deleteLocation).put(updateLocation);

module.exports = router;