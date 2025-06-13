var express = require('express');
var router = express.Router();
var db = require('../db');


router.get('/', async (req, res) => {
    try {
    const [rows] = await db.query(`-------------------`
    );
    res.json(rows);
} catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'DB error' });
        }
});
module.exports = router;
