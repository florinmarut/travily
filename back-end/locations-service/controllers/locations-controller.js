// get the client
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SuperSecretPassword123',
    database: 'travily_db'
})

const createLocation = (req, res) => {
    connection.query(
        `INSERT INTO locations (name) VALUES('${req.body.name}');`,
        (err, results, fields) => {
            if(err)
               res.status(400).send(err);
            else
               res.sendStatus(200);
        }
    )
}

const listLocations = (req, res) => {
    connection.query(
      'SELECT id, name FROM locations',
      (err, results, fields) => {
          if(err)
            res.status(500).send(err);
          else
            res.status(200).send(results);
      }
    );
}

const getLocation = (req, res) => {
    connection.query(
        `SELECT id, name FROM locations where id=${req.params.id}`,
        (err, results, fields) => {
            if(err)
               res.status(500).send(err);
            else
               res.status(200).send(results);
        }
    )
}

const deleteLocation = (req, res) => {
    connection.query(
        `DELETE FROM locations WHERE id=${req.params.id}`,
        (err, results, fields) => {
            if(err)
               res.status(500).send(err);
            else
               res.sendStatus(200);
        }
    )
}

const updateLocation = (req, res) => {
    connection.query(`UPDATE locations SET name='${req.body.name}' WHERE id=${req.params.id}`,
    (err, results, fields) => {
        if(err)
            res.status(500).send(err);
        else
            res.sendStatus(200);
    }
    )
}

module.exports = { listLocations, getLocation, deleteLocation, updateLocation, createLocation }