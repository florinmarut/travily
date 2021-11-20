const express = require('express')
const app = express()
require('dotenv').config()

// parse json
app.use(express.json())

// import router
const router = require('./routes/gateway-routes');

app.use('/', router);

app.listen(5000, () => {
    console.log('API gateway is listening on port 5000');
})