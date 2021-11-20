const express = require('express')
const app = express()
require('dotenv').config()

// parse json
app.use(express.json())

// import router
const router = require('./routes/comments-routes')

app.use('/comments', router);

app.listen(4005, () => {
    console.log("Comments service listening on port 4005");
})