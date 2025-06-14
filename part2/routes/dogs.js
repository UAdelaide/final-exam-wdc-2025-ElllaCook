
var express = require('express');
var router = express.Router();
const db = require('../models/db');

router.get('/', async (req, res) => {
    try {
    const [rows] = await db.query(`SELECT Dogs.name AS dog_name, Dogs.size,
    Users.username AS owner_username FROM Dogs JOIN Users ON Dogs.owner_id = Users.user_id`
    );
    res.json(rows);
} catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'DB error' });
        }
});

module.exports = router;
