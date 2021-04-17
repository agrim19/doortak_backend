const router = require('express').Router();
const con = require('../db');

//  Delivered Orders
router.get('/:id/completedOrders', (req, res, next) => {
    try {
        con.query("SELECT * from `Orders` where STATUS ='DONE' and Delivery_Person_ID='" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});
//  Previous Month Earnings

router.get("/:id/earnings", (req, res, next) => {
    try {
        con.query("select Delivery_Person_Earning.Month, Delivery_Person_Earning.Earnings from Delivery_Person, Delivery_Person_Earning WHERE Delivery_Person.Person_ID=Delivery_Person_Earning.Delivery_Person_ID AND Delivery_Person.Person_ID='" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});
// Current Order Screen(optional)
router.get('/:id/pendingOrders', (req, res, next) => {
    try {
        con.query("SELECT * from `Orders` where STATUS ='NOT DONE' and Delivery_Person_ID='" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});
// See/Edit Profile
router.post("/:id/edit", (req, res, next) => {
    const { Name, Phone_Number, Vehicle_ID } = req.body;
    con.query("update Delivery_Person set Name ='" + Name + "', Phone_Number = '" + Phone_Number + "', Vehicle_ID = '" + Vehicle_ID + "'  where Person_ID = '" + req.params.id + "';", (err, result, fields) => {
        if (err) return res.json(err);
        return res.json(result);
    })
});

module.exports = router;