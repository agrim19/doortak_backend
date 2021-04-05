const router = require('express').Router();
const con = require('../db');

router.get('/:id/dishes', (req, res, next) => {console.log(req.params.id);
    try {
        con.query("select Dishes.Dishes_ID as DishID, Dishes.Dishes, Dishes.price FROM `Restaurant`, `Dishes` WHERE Dishes.Restaurant_ID=Restaurant.Restaurant_ID AND Restaurant.Restaurant_ID='" + req.params.id + "';",
 (err, result, fields) => {

            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});


router.get("/:id/details", (req, res, next) => {
    try {
        con.query("select * from Restaurant WHERE Restaurant.Restaurant_ID='" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});

router.get("/:id/sales", (req, res, next) => {
    try {
        con.query("select * from Restaurant, Restaurant_Sales WHERE Restaurant.Restaurant_ID=Restaurant_Sales.Restaurant_ID AND Restaurant.Restaurant_ID='" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});

module.exports = router;