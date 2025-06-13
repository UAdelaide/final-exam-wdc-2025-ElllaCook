var express = require('express');
var router = express.Router();
var db = require('../db');


router.get('/', async (req, res) => {
    try {
    const [rows] = await db.query(`SELECT Users.username AS walker_username, COUNT(WalkRatings.rating_id) AS total_ratings,
        ROUND(AVG(WalkRatings.rating), 2) AS average_rating, COUNT(DISTINCT WalkRequests.request_id) AS completed_walks FROM Users LEFT JOIN WalkRatings ON Users.user_id = WalkRatings.walker_id LEFT JOIN WalkRequests ON WalkRatings.request_id = WalkRequests.request_id AND WalkRequests.status = 'completed' WHERE Users.role = 'walker'
        GROUP BY Users.username;`
    );
    res.json(rows);
} catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'DB error' });
        }
});
module.exports = router;
