// @ts-check

const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/', (req, res) => {
  res.send(path.join(__dirname, '../client/build/index.html'));
  // res.render('../client/build/index.html');
});


module.exports = router;
