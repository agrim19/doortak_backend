const express = require('express');
const app = express();
const uuid = require('uuid').v4;
const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "addsecretenvvariablehere",
    resave: false,
    saveUninitialized: true
}));
app.use("/", require("./routes/index"));
app.use("/", require("./routes/auth"));
app.use("/user", require("./routes/user"));

app.listen("8080", () => {
    console.log("Listening on port 8080");
})