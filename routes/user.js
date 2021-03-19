const router = require('express').Router();
const con = require('../db');

router.get('/:id/orders', (req, res, next) => {
    try {
        con.query("SELECT * from `sql6399261`.`Orders` where Customer_ID='" + req.params.id + "';", (err, result, fields) => {
            return res.json(result);
        })
    }
    catch (e) {
        console.log(e);
        return res.send("ERROR");
    }
})

module.exports = router;