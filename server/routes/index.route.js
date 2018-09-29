const express = require('express');

const router = express.Router();

// dummy get /todos api
router.get('/todos', (req, res) => {
  const page = 'Hello';
  res.end(page);
  return res.status(200);
});

module.exports = router;
