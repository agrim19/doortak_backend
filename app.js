const express = require('express');
const app = express();

app.use("/", require("./routes/index"));

app.listen("8080", () => {
    console.log("Listening on port 8080");
})