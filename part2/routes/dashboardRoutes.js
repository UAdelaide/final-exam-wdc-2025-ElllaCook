const express = require('express');
const router = express.Router();
const path = require('path');


// OWNER DASH ROUTER
router.get('/owner'), (req, res) => {

    if (!req.session || !req.session.user) {
        return res.redirect('/');
    }
    if (req.session.user.role !== 'owner'){
        return res.status.(403).send('Not authorised')
    }
    res.sendFile(path.join(__dirname, '../public/owner-dashboard.html'));
});

// WALKER DASH ROUTER
router.get('/walker'), (req, res) => {
    res.sendFile(path.join(__dirname, '../public/walker-dashboard.html'));
});

module.exports = router;