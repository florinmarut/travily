const express = require('express')
const app = express()
require('dotenv').config()

// parse json
app.use(express.json())

// import router
const router = require('./routes/users-routes')

app.use('/users', router);

app.listen(4002, () => {
    console.log("Users service listening on port 4002");
})