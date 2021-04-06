const router = require('express').Router();
const con = require('../db');

router.get('/:id/orders', (req, res, next) => {
    try {
        con.query("SELECT * from `Orders` where Customer_ID='" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});

router.get("/:id/paymentmethods", (req, res, next) => {
    try {
        con.query("SELECT * from `Payment_Methods` where Customer_ID='" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});

router.get("/:id/addresses", (req, res, next) => {
    try {
        con.query("SELECT * from `Addresses` where Customer_ID='" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});

router.get("/:id", (req, res, next) => {
    try {
        con.query("Select * from Customer where Customer_ID = '" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        });
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});

router.post("/:id/update", (req, res, next) => {
    const { Customer_ID, phoneNumber, Name } = req.body;
    try {
        con.query("update Customer set Phone_number ='" + phoneNumber + "',Name = '" + Name + "' where Customer_ID = '" + Customer_ID + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
})

module.exports = router;