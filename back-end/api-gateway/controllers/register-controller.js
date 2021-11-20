const axios = require('axios');
const jwt = require('jsonwebtoken')

const register = (req, res) => {
    const { email, firstName, surname, description, password } = req.body;
    axios.post('http://localhost:4001/register', {
        firstName: firstName,
        surname: surname,
        email: email,
        description: description,
        password: password
      })
      .then((response) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
}

module.exports = { register };