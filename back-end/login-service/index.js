const express = require('express')
const app = express()

// parse json
app.use(express.json())

// import router
const router = require('./routes/login-routes')

app.use('/login', router);

app.listen(4006, () => {
    console.log('Login service listening on port 4006');
})