var express = require("express");
var app = express();
var path = require("path");
var port = 3000 || process.env.PORT;
var friendList = require("./app/data/friends.js");
console.log(friendList);

var userForm = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//make public folder available to use
app.use(express.static('app/public'));

//index route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

//still testing api routing
app.get("/api/user", function(req, res) {
    return res.json(userForm);
})

//get information from the new user form and push into existing array
app.post("/api/user", function(req, res) {
    var newUser = req.body;
    userForm.push(newUser);
    res.json(newUser);
})

//survey page displaying user information entered from the home screen
app.post("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

//default survey page if user does not submit information through new user form
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

app.get("/api/friends", function(req, res) {
    return res.json(friendList);
})

//set up port for Heroku
app.listen(port, function() {
    console.log("Listening on port " + port);
})