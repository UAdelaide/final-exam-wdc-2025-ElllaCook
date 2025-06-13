var express = require('express');
var router = express.Router();
var

// 
router.get('/', function(req, res) {

    query = 'SELECT dog_name, size, owner_username FROM Dogs'


  res.render('index', { title: 'Express' });
});

module.exports = router;
