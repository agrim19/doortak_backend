const express = require('express');
const app = express();
const session = require('express-session');
require('dotenv').config()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    cookie: {
        secure: true,
        maxAge: 60000
    },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use("/", require("./routes/index"));
app.use("/", require("./routes/auth"));
app.use("/user", require("./routes/user"));
app.use("/order", require("./routes/order"));
app.use("/restaurant", require("./routes/restaurant"));
app.use("/ngo", require("./routes/ngo"));
app.use("/complaint", require("./routes/complaint"));
app.use("/donation", require("./routes/donations"));
app.use("/admin", require("./routes/admin"));
app.use("/delivery", require("./routes/delivery"));

app.listen("8080", () => {
    console.log("Listening on port 8080");
})
