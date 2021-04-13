const router = require('express').Router();
const con = require('../db');

router.get('/:id/dishes', (req, res, next) => {
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

router.get("/top", (req, res, next) => {
    try {
        con.query("Select Restaurant.Name, Restaurant.Address, Restaurant.Phone_Number, Restaurant.Rating, count(*) from Restaurant, Orders where Restaurant.Restaurant_ID = Orders.Restaurant_ID group by Orders.Restaurant_ID order by count(*) desc limit 5;", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});

router.post("/:id/add_dish", (req, res, next) => {
    con.query("INSERT INTO `Dishes` (Dishes_ID, Dishes, Price, Restaurant_ID) VALUES ( '" + req.body.Dishes_ID + "', '" + req.body.Dishes + "', '" + req.body.Price + "', '" + req.params.id + "');", (err, result, fields) => {
        return res.json(result);
    });
});

router.post("/:id/edit_dish", (req, res, next) => {
    con.query("UPDATE `Dishes` SET  Dishes='" + req.body.Dishes + "', Price='" + req.body.Price + "' WHERE   Dishes_ID='" + req.body.Dishes_ID + "' AND Restaurant_ID=   '" + req.params.id + "';", (err, result, fields) => {
        return res.json(result);
    });
});

router.get('/:id/pendingOrders', (req, res, next) => {
    try {
        con.query("SELECT * from `Orders` where STATUS ='NOT DONE' and Restaurant_ID='" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});

router.get('/:id/completedOrders', (req, res, next) => {
    try {
        con.query("SELECT * from `Orders` where STATUS ='DONE' and Restaurant_ID='" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
});

module.exports = router;