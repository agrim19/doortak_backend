const router = require('express').Router();
const con = require("../db");

router.get("/:id/items", (req, res, next) => {
    con.query("Select Dishes.Dishes as DishName, Order_Items.Quantity, Dishes.Price*Order_Items.Quantity as TotalPrice from `Dishes`, `Order_Items` where Dishes.Dishes_ID=Order_Items.Dishes_ID and `Order_ID`='" + req.params.id + "';", (err, result, fields) => {
        if (err) console.log(err);
        return res.json(result);
    });
});

module.exports = router;