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

//방명록
router.get('/guest', function(req, res, next) {
  res.render('guest', { title: 'Express' });
});



// GET ALL BOOKS
router.get('/api/books', function(req,res){
    res.end();
});

// GET SINGLE BOOK
router.get('/api/books/:book_id', function(req, res){
    res.end();
});

// GET BOOK BY AUTHOR
router.get('/api/books/author/:author', function(req, res){
    res.end();
});

// CREATE BOOK
router.post('/api/books', function(req, res){
    res.end();
});

// UPDATE THE BOOK
router.put('/api/books/:book_id', function(req, res){
    res.end();
});

// DELETE BOOK
router.delete('/api/books/:book_id', function(req, res){
    res.end();
});


module.exports = router;
