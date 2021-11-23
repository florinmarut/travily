const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');

// import controller
const { listComments, listCommentsByPostId, getComment, deleteComment, updateComment, createComment, upvote, downvote } = require('../controllers/comments-controller')

router.use((req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if(bearerHeader !== 'undefined'){
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

router.route('/:id').get(getComment).put(updateComment).delete(deleteComment);
router.route('/').post(createComment).get(listComments);
router.put('/upvote/:id', upvote);
router.put('/downvote/:id', downvote);
router.get('/post/:post_id', listCommentsByPostId);

module.exports = router;