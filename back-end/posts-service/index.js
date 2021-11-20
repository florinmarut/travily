const express = require('express')
const app = express()
require('dotenv').config()

// parse json
app.use(express.json())

// import router
const router = require('./routes/posts-routes')

app.use('/posts', router);

app.listen(4003, () => {
    console.log("Posts service listening on port 4003");
})