var express = require("express");
var path = require("path");
var app = express();
var port = 3000 || process.env.PORT;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

app.listen(port, function() {
    console.log("Listening on port " + port);
})