// get the client
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SuperSecretPassword123',
    database: 'travily_db'
})

const listUsers = (req, res) => {
    connection.query(
      'SELECT email, firstname, surname, description FROM users',
      (err, results, fields) => {
          if(err)
            res.status(500).send(err);
          else
            res.status(200).send(results);
      }
    );
}

const getUser = (req, res) => {
    connection.query(
        `SELECT email, firstname, surname, description FROM users where id=${req.params.id}`,
        (err, results, fields) => {
            if(err)
               res.status(500).send(err);
            else
               res.status(200).send(results);
        }
    )
}

const deleteUser = (req, res) => {
    connection.query(
        `DELETE FROM users WHERE id=${req.params.id}`,
        (err, results, fields) => {
            if(err)
               res.status(500).send(err);
            else
               res.sendStatus(200);
        }
    )
}

const updateUser = (req, res) => {
    // connection.query(`UPDATE users SET `,
    // (err, results, fields) => {
    //     if(err)
    //         res.status(500).send(err);
    //     else
    //         res.sendStatus(200);
    // }
    // )
}

module.exports = { listUsers, getUser, deleteUser, updateUser }