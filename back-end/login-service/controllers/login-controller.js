// get the client
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SuperSecretPassword123',
    database: 'travily_db'
})

const login = (req, res) => {
    const { email, password } = req.body;
    connection.query(
        `SELECT * FROM users WHERE email='${email}' AND password='${password}'`,
        (err, results, fields) => {
            if(err)
               res.status(500).send(err);
            else{
                if(results.length === 0)
                  res.status(401).send(results);
                else
                  res.status(200).send(results[0]);
            }
        }
    );   
}

module.exports = { login };