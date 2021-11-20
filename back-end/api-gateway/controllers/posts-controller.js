const axios = require('axios');
const jwt = require('jsonwebtoken')

const createPost = (req, res) => {
    axios({
    method: 'post',
    url: 'http://localhost:4003/posts',
    headers: {
    authorization: req.headers['authorization'],
    data: {
      user_id: req.body.user_id,
      location_id: req.body.location_id,
      content: req.body.content
    }
    }
    })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
}

const updatePost = (req, res) => {
    axios({
    method: 'put',
    url: `http://localhost:4003/posts/${req.params.id}`,
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

const deletePost = (req, res) => {
    axios({
    method: 'delete',
    url: `http://localhost:4003/posts/${req.params.id}`,
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

const getPost = (req, res) => {
    axios({
    method: 'get',
    url: `http://localhost:4003/posts/${req.params.id}`,
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

const listPosts = (req, res) => {
    axios({
     method: 'get',
    url: 'http://localhost:4003/posts',
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

module.exports = { listPosts, getPost, deletePost, createPost, updatePost };