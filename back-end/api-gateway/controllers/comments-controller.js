const axios = require('axios');
const jwt = require('jsonwebtoken')

const createComment = (req, res) => {
    const {user_id, post_id, content} = req.body;
    axios({
    method: 'post',
    url: 'http://localhost:4005/comments',
    headers: {
    authorization: req.headers['authorization'],
    },
    data: {
      user_id: user_id,
      post_id: post_id,
      content: content
  }
    })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
}

const updateComment = (req, res) => {
    axios({
    method: 'put',
    url: `http://localhost:4005/comments/${req.params.id}`,
    headers: {
        authorization: req.headers['authorization']
    },
    data: {
      content: req.body.content
    }})
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
}

const deleteComment = (req, res) => {
    axios({
    method: 'delete',
    url: `http://localhost:4005/comments/${req.params.id}`,
    headers: {
    authorization: req.headers['authorization']
    }
    })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
}

const getComment = (req, res) => {
    axios({
    method: 'get',
    url: `http://localhost:4005/comments/${req.params.id}`,
    headers: {
    authorization: req.headers['authorization']
    }
    })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
}

const listComments = (req, res) => {
    axios({
     method: 'get',
    url: 'http://localhost:4005/comments',
    headers: {
    authorization: req.headers['authorization']
    }
    })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
}

const listCommentsByPostId = (req, res) => {
  axios({
   method: 'get',
  url: `http://localhost:4005/comments/post/${req.params.post_id}`,
  headers: {
  authorization: req.headers['authorization']
  }
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(401).json(error);
    });
}

module.exports = { listComments, getComment, deleteComment, createComment, updateComment, listCommentsByPostId };