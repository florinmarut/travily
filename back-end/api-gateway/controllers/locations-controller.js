const axios = require('axios');
const jwt = require('jsonwebtoken')

const createLocation = (req, res) => {
    axios({
    method: 'post',
    url: 'http://localhost:4004/locations',
    headers: {
    authorization: req.headers['authorization'],
    data: {
        name: req.body.name
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

const updateLocation = (req, res) => {
    axios({
    method: 'put',
    url: `http://localhost:4004/locations/${req.params.id}`,
    headers: {
        authorization: req.headers['authorization']
    },
    data: {
        name: req.body.name
    }})
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
}

const deleteLocation = (req, res) => {
    axios({
    method: 'delete',
    url: `http://localhost:4004/locations/${req.params.id}`,
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

const getLocation = (req, res) => {
    axios({
    method: 'get',
    url: `http://localhost:4004/locations/${req.params.id}`,
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

const listLocations = (req, res) => {
    axios({
     method: 'get',
    url: 'http://localhost:4004/locations',
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

module.exports = { listLocations, getLocation, deleteLocation, createLocation, updateLocation };