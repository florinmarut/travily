const axios = require('axios');
const jwt = require('jsonwebtoken')

const createPost = (req, res) => {
  const { user_id, content, location } = req.body;
    axios({
    method: 'post',
    url: 'http://localhost:4003/posts',
    headers: {
    authorization: req.headers['authorization'],
    },
    data: {
      user_id: user_id,
      location: location,
      content: content
    }
    })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        //console.log(error);
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

const listPostsByUserId = (req, res) => {
  axios({
   method: 'get',
  url: `http://localhost:4003/posts/user/${req.params.user_id}`,
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

module.exports = { listPosts, getPost, deletePost, createPost, updatePost, listPostsByUserId };