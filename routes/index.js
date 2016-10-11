var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//소개
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

//사진첩
router.get('/photo', function(req, res, next) {
  res.render('photo', { title: 'Express' });
});

 
module.exports = router