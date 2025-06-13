var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res) {

    const query = 'SELECT Dogs.name AS dog_name, Dogs.size, Users.username FROM Dogs JOIN '


  res.render('index', { title: 'Express' });
});

module.exports = router;
