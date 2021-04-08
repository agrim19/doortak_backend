const router = require('express').Router();
const con = require('../db');

router.post("/new", (req, res, next) => {
    con.query("INSERT INTO `Customer_complaints` (`Customer_id`, `AdminID`, `Complaint_body`) VALUES ( '" + req.body.customerID + "', '" + req.body.adminID + "', '" + req.body.complaintBody + "');", (err, result, fields) => {
        return res.json(result);
    });
});

module.exports = router;