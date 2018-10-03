const express = require('express');

const router = express.Router();


// dummy get /todos api
router.get('/todos', (req, res) => {
  const page = 'Hello';
  res.end(page);
  return res.status(200);
});

router.post('/signin', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  res.redirect('/');
  return res.status(200);
});

router.post('/signup', (req, res) => {
  console.log(req.url);
  res.redirect('/');
  return res.status(200);
});

module.exports = router;
