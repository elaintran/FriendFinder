var express = require("express");
var app = express();
var path = require("path");
var port = 3000 || process.env.PORT;

var userForm = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//make public folder available to use
app.use(express.static('app/public'));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

app.get("/api/user", function(req, res) {
    return res.json(userForm);
})

app.post("/api/user", function(req, res) {
    var newUser = req.body;
    userForm.push(newUser);
    res.json(newUser);
})

app.post("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

//set up port for Heroku
app.listen(port, function() {
    console.log("Listening on port " + port);
})