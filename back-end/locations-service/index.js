const express = require('express')
const app = express()
require('dotenv').config()

// parse json
app.use(express.json())

// import router
const router = require('./routes/locations-routes')

app.use('/locations', router);

app.listen(4004, () => {
    console.log("Locations service listening on port 4004");
})