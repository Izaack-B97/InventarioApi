const express = require('express');
const router = express.Router();
const connect = require('../private/config/database');

router.get('/automotrices', (req, res) => {
    connect();
    
});

module.exports = router;