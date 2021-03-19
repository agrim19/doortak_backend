const express = require('express'),
    con = require('../db')

const router = express.Router();

router.post("/sendOTP", (req, res, next) => {
    const otp = '1234';
    const phoneNumber = req.body.phoneNumber;
    con.query("UPDATE `sql6399261`.`Customer` SET `tempOTP` = '" + otp + "' WHERE (`Phone_number` = '" + phoneNumber + "');", (err, result, fields) => {
        if (err) return next(err);
        // TODO:check result.affectedRows. If 0, number does not exist
        return res.json(result);
    });
})
router.post("/verifyOTP", (req, res, next) => {
    const { receivedOTP, phoneNumber } = req.body;
    con.query("SELECT * from `sql6399261`.`Customer` WHERE (`Phone_number` = '" + phoneNumber + "');", (err, result, fields) => {
        if (err) return next(err);
        if (result[0].tempOTP == receivedOTP) {
            req.session.user_id = phoneNumber;
            con.query("UPDATE `sql6399261`.`Customer` SET `tempOTP` = NULL WHERE (`Phone_number` = '" + phoneNumber + "')", (err, result, fields) => {
                return res.send(result);
            });
        }
        else {
            console.log(result);
            return res.send("SOME ERROR OCCURED");
        }
    });
});

router.post("/logout", (req, res, next) => {
    if (!req.session.user_id) return res.send("NOT LOGGED IN")
    req.session.user_id = null;
    return res.send("LOGGED OUT");
})

module.exports = router;