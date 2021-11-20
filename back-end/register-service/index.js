const express = require('express')
const app = express()

// parse json
app.use(express.json())

// import routes
const router = require('./routes/register-route')

app.use('/register', router);

app.listen(4001, () => {
    console.log("Register service listening on port 4001");
})