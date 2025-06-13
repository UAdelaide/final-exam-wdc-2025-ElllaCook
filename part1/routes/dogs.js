var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res) {

    const query = `SELECT Dogs.name AS dog_name, Dogs.size,
    Users.username FROM Dogs JOIN Users ON Dogs.owner_id = Users.user_id`;

    try {}
    db.query(sql, (err, result) => {
        try {

        }
    })

  res.json(result);
});

module.exports = router;
