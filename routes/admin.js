const router = require('express').Router();
const con = require("../db");
//Order List
router.get("/order_list", (req, res, next) => {
    try {
        con.query("select * from Orders ;", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});
//  Donation List
router.get("/donation_list", (req, res, next) => {
    try {
        con.query("select * from Donations ;", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});
// Complaints list
router.get("/complaints_list", (req, res, next) => {
    try {
        con.query("select * from Customer_complaints ;", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});
//  Assigned Complaints List
router.get("/:id/complaints", (req, res, next) => {
    con.query("select * from Customer_complaints where AdminID ='" + req.params.id + "';", (err, result, fields) => {
        if (err) console.log(err);
        return res.json(result);
    });
});
// Customer List
router.get("/customer_list", (req, res, next) => {
    try {
        con.query("select * from Customer ;", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});
//  Restaurant List
router.get("/restaurant_list", (req, res, next) => {
    try {
        con.query("select * from Restaurant ;", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});
// Delivery Person List

router.get("/deliveryperson_list", (req, res, next) => {
    try {
        con.query("select * from Delivery_Person ;", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});

module.exports = router;