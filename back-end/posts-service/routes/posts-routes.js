const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

// import controller
const { listPosts, getPost, deletePost, updatePost, createPost, upvote, downvote, listPostsByUserId } = require('../controllers/posts-controller')

router.use((req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if(bearerHeader !== undefined){
        const [bearer, bearerToken] = bearerHeader.split(' ');

        jwt.verify(bearerToken, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                // err = {
                //   name: 'JsonWebTokenError',
                //   message: 'jwt malformed'
                // }
                res.json(err);
            }
            else{
                req.token = bearerToken;
                next();
            }
          });
    }
    else{
        res.sendStatus(401);
    }
});

router.route('/:id').get(getPost).put(updatePost).delete(deletePost);
router.route('/').post(createPost).get(listPosts);
router.get('/user/:user_id', listPostsByUserId);
router.put('/upvote/:id', upvote);
router.put('/downvote/:id', downvote);

module.exports = router;