const router = require('express').Router();
const con = require('../db');

router.get("/", (req, res, next) => {
    ret = {}
    con.query("select SUM(Quantity) as sumDishes from Donation_Items", (err, result, fields) => {
        ret.noDishes = result[0].sumDishes
        con.query("select count(*) as noNgo from NGO", (err, result, fields) => {
            ret.noNgo = result[0].noNgo;
            con.query("select count(DISTINCT Restaurant_ID) as noRest from Donations", (err, result, fields) => {
                ret.noRest = result[0].noRest;
                return res.json(ret);
            });
        });
    });
});

module.exports = router;