const express = require('express');
const router = express.Router();
const db = require('../models/db');
const path = require('path');


// OWNER DASH ROUTER
router.get('/owner'), (req, res) => {
    res.sendFile(path.join(__dirname, '../public/owner-dashboard.html'));
});

// WALKER DASH ROUTER
router.get('/walker'), (req, res) => {
    res.sendFile(path.join(__dirname, '../public/walker-dashboard.html'));
});

module.exports = router;