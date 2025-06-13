var express = require('express');
var router = express.Router();
var db = require('../db');


router.get('/', async (req, res) => {
    try {
    const [rows] = await db.query(`SELECT WalkRequests.request_id, Dogs.name AS dog_name, WalkRequests.requested_time,
WalkRequests.duration_minutes, WalkRequests.location, Users.username AS owner_username
FROM WalkRequests JOIN Dogs ON WalkRequests.dog_id = Dogs.dog_id JOIN Users ON Dogs.owner_id = Users.user_id
WHERE WalkRequests.status = 'open'`
    );
    res.json(rows);
} catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'DB error' });
        }
});
module.exports = router;
