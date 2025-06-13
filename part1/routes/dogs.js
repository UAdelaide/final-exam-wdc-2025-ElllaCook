var express = require('express');
var router = express.Router();
var

/* GET home page. */
router.get('/', function(req, res, next) {

    query = 'SELECT dog_name, size, owner_username FROM Dogs'

    
  res.render('index', { title: 'Express' });
});

module.exports = router;
