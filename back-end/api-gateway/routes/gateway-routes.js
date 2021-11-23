const express = require('express')

// import controller
const { login } = require('../controllers/login-controller')
const { register } = require('../controllers/register-controller')
const { listPosts, getPost, deletePost, updatePost, createPost, listPostsByUserId } = require('../controllers/posts-controller');
const { listComments, getComment, deleteComment, createComment, updateComment, listCommentsByPostId } = require('../controllers/comments-controller');
const { listLocations, getLocation, deleteLocation, createLocation, updateLocation } = require('../controllers/locations-controller');
const { listUsers, getUser, deleteUser, updateUser, getUserByUserName } = require('../controllers/users-controller');

// import router
const router = express.Router()
const cors = require('cors');

router.use(cors());

router.post('/register', register);

router.post('/login', login);

router.route('/posts').get(listPosts).post(createPost);
router.route('/posts/:id').get(getPost).delete(deletePost).put(updatePost);
router.get('/posts/user/:user_id', listPostsByUserId);

router.route('/comments').get(listComments).post(createComment);
router.get('/comments/post/:post_id', listCommentsByPostId);
router.route('/comments/:id').get(getComment).delete(deleteComment).put(updateComment);

router.route('/locations').get(listLocations).post(createLocation);
router.route('/locations/:id').get(getLocation).delete(deleteLocation).put(updateLocation);

router.route('/users').get(listUsers);
router.route('/users/:id').get(getUser).delete(deleteUser).put(updateUser);

module.exports = router;