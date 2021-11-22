const axios = require('axios');
const jwt = require('jsonwebtoken')

const signToken = (req, res, object) => {
    jwt.sign(object, process.env.ACCESS_TOKEN, (err, token) => {
        if(err){
            res.status(401).json(err);
        } else{
            res.status(200).send(token);
        }
      });
}

const login = (req, res) => {
    const { email, password } = req.body;
    axios.post('http://localhost:4006/login', {
        email: email,
        password: password
      })
      .then((response) => {
        signToken(req, res, response.data);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
}

module.exports = { login };