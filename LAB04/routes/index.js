var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Website' });
});

/* GET person1 page. */
router.get('/person1', function(req, res, next) {
  res.render('person1', { title: 'Person 1' });
});

/* GET person2 page. */
router.get('/person2', function(req, res, next) {
  res.render('person2', { title: 'Person 2' });
});

/* GET person3 page. */
router.get('/person3', function(req, res, next) {
  res.render('person3', { title: 'Person 3' });
});

/* GET person4 page. */
router.get('/person4', function(req, res, next) {
  res.render('person4', { title: 'Person 4' });
});

module.exports = router;
