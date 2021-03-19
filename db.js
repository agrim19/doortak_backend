const mysql = require('mysql');
require('dotenv').config()

const con = mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});
module.exports = con;