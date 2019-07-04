var express = require("express");
var path = require("path");
var app = express();
var port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

//make public folder available to use
app.use(express.static('app/public'));

//
app.listen(3000 || process.env.PORT, function() {
    console.log("Listening on port " + port);
})