const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET

koalaRouter.get('/', (req, res) => {
    let queryText = `SELECT * FROM "koala_table"`;
    pool.query(queryText)
.then(result => {
    res.send(result.rows);
})
.catch(error => {
  console.log('error getting koalas', error);
  res.sendStatus(500);
});
});

// POST

koalaRouter.post('/',  (req, res) => {
    let newKoala = req.body;

    let queryText = `INSERT INTO "koala_table" ("name", "gender", "age", "ready_to_transfer", "notes")
                     VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newKoala.name, newKoala.gender, newKoala.age, newKoala.ready_to_transfer, newKoala.notes])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new koala`, error);
        res.sendStatus(500);
      });
  });

// PUT
koalaRouter.put('/:id', (req, res) => {
  const queryText =
    `UPDATE "koala_table" 
    SET "ready_to_transfer"=$1
    WHERE "id"=$2;`;


  const queryParams = [req.body.ready_to_transfer, req.params.id];

  pool
    .query(queryText, queryParams)
    .then((dbRes) => {
    //   console.log('sending 200');
    //   res.status(200).json({ success: true });
    res.sendStatus(200); 
    })
    .catch((error) => {
      console.log('sending 500');
      console.log(`PUT Error making query: ${queryText}`, error);
      res.sendStatus(500);
    });
});

// DELETE

module.exports = koalaRouter;
