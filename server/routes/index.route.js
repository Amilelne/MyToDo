const express = require('express');

const router = express.Router();

const multipart = require('connect-multiparty');
var multipartMiddleware= multipart();


// md5 encode password
const md5 = require('../md5');

// generate unique user id
const uuid = require('node-uuid');

// userInfo array
var users = [];

// dummy get /todos api
router.get('/todos', (req, res) => {
  const page = 'Hello';
  res.end(page);
  return res.status(200);
});

router.post('/signin',multipartMiddleware, (req, res) => {
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  //password = md5(password);
  let flag = false;
  users.forEach(user => {
    if(username === user.username){
      if(password == user.password){
        flag = 1;
        return;
      }
    }
  });
  if(flag == true){
    res.send('login success');
  }
  else{
    res.end('login fail,please check the username or password!')
  }
  return res.status(200);
});

router.post('/signup',multipartMiddleware, (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  let flag = false;
  users.forEach(user => {
    if(username === user.username){
      flag = true;
      return;
    }
  });
  if( flag == true){
    res.send("user has registerd, please sign in");
  }
  else{
    //password = md5(password);
    var userId = uuid.v1();
    users.push({userId, username, password});
    res.send('success, please login');
  }
  return res.status(200);
});

module.exports = router;
