// get the client
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SuperSecretPassword123',
    database: 'travily_db'
})

const register = (req, res) => {
    const { email, firstName, surname, description, password } = req.body;
    connection.query(
        `INSERT INTO users(email, firstname, surname, description, password) VALUES('${email}', '${firstName}', '${surname}', '${description}', '${password}');`,
        (err, results, fields) => {
            if(err)
               res.status(400).send(err);
            else
               res.sendStatus(201);
        }
    );
}

module.exports = register;