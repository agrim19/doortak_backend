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

router.get("/:id", (req, res, next) => {
    con.query("select * from NGO where Registeration_Number='" + req.params.id + "';", (err, result, fields) => {
        return res.json(result);
    });
});

router.post("/:id/edit", (req, res, next) => {
    const { Name, Address, Request_Status } = req.body;
    con.query("update NGO set Name ='" + Name + "',Address = '" + Address + "',Request_Status = '" + Request_Status + "' where Registeration_Number = '" + req.params.id + "';", (err, result, fields) => {
        if (err) return res.json(err);
        return res.json(result);
    })
});

router.get("/:id/prevDonations", (req, res, next) => {
    con.query("select * from Donations where Registeration_Number = '" + req.params.id + "';", (err, result, fields) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

router.get("/:id/stats", (req, res, next) => {
    ret = {}
    con.query("select SUM(Quantity) as sumDishes from Donation_Items where Donation_Number IN (select Donation_Number from Donations where Registeration_Number = '" + req.params.id + "');", (err, result, fields) => {
        ret.noDishes = result[0].sumDishes
        con.query("select count(DISTINCT Restaurant_ID) as noRest from Donations where Registeration_Number = '" + req.params.id + "';", (err, result, fields) => {
            ret.noRest = result[0].noRest;
            return res.json(ret);
        });
    });
});

module.exports = router;