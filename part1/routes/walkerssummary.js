var express = require('express');
var router = express.Router();
var db = require('../db');


router.get('/', async (req, res) => {
    try {
    const [rows] = await db.query(`SELECT WalkRequests.request_id, Dogs.name AS dog_name, WalkRequests.requested_time, WalkRequests.duration_minutes, WalkRequests.location, Users.username AS owner_username
FROM WalkRequests JOIN Dogs ON WalkRequests.dog_id = Dogs.dog_id JOIN Users ON Dogs.owner_id = Users.user_id WHERE WalkRequests.status = 'open'`

SELECT Users.username AS walker_username, COUNT(WalkRatings.rating_id) AS total_ratings, ROUND(AVG(WalkRatings.rating), 2) AS average_rating, COUNT(DISTINCT WalkRequests.request_id) AS completed_walks FROM Users LEFT JOIN WalkRatings ON Users.user_id = WalkRatings.walker_id LEFT JOIN WalkRequests ON WalkRatings.request_id = WalkRequests.request_id AND WalkRequests.status = 'completed' WHERE Users.role = 'walker' GROUP BY Users.username;`
    );
    res.json(rows);
} catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'DB error' });
        }
});
module.exports = router;
