const express = require('express');
const router = express.Router();
const db = require('../models/db');
const { path } = require('../app');


// WALKER DASH ROUTER
router.get('/walker'), (req, res) => {
    res.sendFile(path.join(__dirname, ))
}
// OWNER DASH ROUTER

module.exports = router;