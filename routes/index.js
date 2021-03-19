const express = require('express'),
    con = require('../db');
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log('Check home route');
    console.log(req.sessionID);
    res.send("HELLO");
});

module.exports = router;