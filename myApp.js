var express = require('express');
var app = express();

console.log("Hello World");

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

app.get("/", function(req, res) {
    res.sendFile(__dirname + "views/index.html");
});





























 module.exports = app;
