// get the client
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SuperSecretPassword123',
    database: 'travily_db'
})

const createComment = (req, res) => {
    connection.query(
        `INSERT INTO comments (user_id, post_id, content, votes, date) VALUES('${req.body.user_id}', '${req.body.post_id}', '${req.body.content}', 0, NOW());`,
        (err, results, fields) => {
            if(err)
               res.status(400).send(err);
            else
               res.sendStatus(200);
        }
    )
}

const listComments = (req, res) => {
    connection.query(
      'SELECT id, user_id, post_id, content, date, update_date, votes FROM comments',
      (err, results, fields) => {
          if(err)
            res.status(500).send(err);
          else
            res.status(200).send(results);
      }
    );
}

const getComment = (req, res) => {
    connection.query(
        `SELECT id, user_id, post_id, content, date, update_date, votes FROM comments where id=${req.params.id}`,
        (err, results, fields) => {
            if(err)
               res.status(500).send(err);
            else
               res.status(200).send(results);
        }
    )
}

const deleteComment = (req, res) => {
    connection.query(
        `DELETE FROM comments WHERE id=${req.params.id}`,
        (err, results, fields) => {
            if(err)
               res.status(500).send(err);
            else
               res.sendStatus(200);
        }
    )
}

const updateComment = (req, res) => {
    connection.query(`UPDATE comments SET content='${req.body.content}', update_date=NOW() WHERE id=${req.params.id}`,
    (err, results, fields) => {
        if(err)
            res.status(500).send(err);
        else
            res.sendStatus(200);
    }
    )
}

const upvote = (req, res) => {
    connection.query(`UPDATE comments SET votes=votes+1 WHERE id='${req.params.id}'`,
    (err, results, fields) => {
        if(err)
            res.status(500).send(err);
        else
            res.sendStatus(200);
    })
}

const downvote = (req, res) => {
    connection.query(`UPDATE comments SET votes=votes-1 WHERE id='${req.params.id}'`,
    (err, results, fields) => {
        if(err)
            res.status(500).send(err);
        else
            res.sendStatus(200);
    })
}

module.exports = { listComments, getComment, deleteComment, updateComment, createComment, upvote, downvote, listPostsByUserId }