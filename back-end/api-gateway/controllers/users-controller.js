const axios = require('axios');
const jwt = require('jsonwebtoken')

const updateUser = (req, res) => {
    axios({
    method: 'put',
    url: `http://localhost:4002/users/${req.params.id}`,
    headers: {
        authorization: req.headers['authorization']
    },
    data: {
      firstName: req.body.firstName,
      surname: req.body.surname,
      description: req.body.description
    }})
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
}

const deleteUser = (req, res) => {
    axios({
    method: 'delete',
    url: `http://localhost:4002/users/${req.params.id}`,
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

const getUser = (req, res) => {
    axios({
    method: 'get',
    url: `http://localhost:4002/users/${req.params.id}`,
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

const getUserByUserName = (req, res) => {
  axios({
  method: 'get',
  url: `http://localhost:4002/users/profile/${req.params.username}`,
  headers: {
  authorization: req.headers['authorization']
  }
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(401).json(error);
    });
}

const listUsers = (req, res) => {
    axios({
     method: 'get',
    url: 'http://localhost:4002/users',
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

module.exports = { listUsers, getUser, deleteUser, updateUser, getUserByUserName };