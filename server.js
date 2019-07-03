var express = require("express");
var path = require("path");
var app = express();
var port = 3000;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

app.listen(3000 || PROCESS.ENV.PORT, function() {
    console.log("Listening on port " + port);
})