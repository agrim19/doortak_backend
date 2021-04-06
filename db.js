const mysql = require('mysql');
require('dotenv').config()

const con = mysql.createConnection({
    host: "bhqgpt3eewmhyyhfo3sh-mysql.services.clever-cloud.com",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});
con.query('use bhqgpt3eewmhyyhfo3sh;');
module.exports = con;