var express = require('express');
var router = express.Router();
var db = require('../db');



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

`SELECT WalkRequests.request_id, Dogs.name AS dog_name, WalkRequests.requested_time,
WalkRequests.duration_minutes, WalkRequests.location, Users.username AS owner_username
FROM WalkRequests JOIN Dogs ON WalkRequests.dog_id = Dogs.dog_id JOIN Users ON Dogs.owner_id = Users.user_id
WHERE WalkRequests.status = 'open'`