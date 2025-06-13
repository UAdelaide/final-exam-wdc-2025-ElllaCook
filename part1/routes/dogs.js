var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res) {

    const query = 'SELECT dog_name, size, owner_username FROM Dogs'


  res.render('index', { title: 'Express' });
});

module.exports = router;
