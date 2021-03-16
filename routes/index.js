const express = require('express');
const mysql = require('mysql');
require('dotenv').config()

const router = express.Router();
const con = mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});


router.get("/", (req, res, next) => {
    res.send("HELLO");
});

router.get("/data", (req, res, next) => {
    con.connect(err => {
        if (err) { console.log(err); res.send('ERROR'); }
        console.log("Connected");
        res.send("SUCCESSFULLY CONNECTED")
    }
    )
}
)

module.exports = router;