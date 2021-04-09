const router = require('express').Router();
const con = require('../db');

router.get("/:id/items", (req, res, next) => {
    con.query("select * from Donation_Items where Donation_Number = '" + req.params.id + "';", async (err, result, fields) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

module.exports = router;