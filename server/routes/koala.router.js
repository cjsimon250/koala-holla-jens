const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET

// POST

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
