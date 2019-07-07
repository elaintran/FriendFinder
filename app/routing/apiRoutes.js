var express = require("express");
var app = express();
var friendList = require("../data/friends.js");

var userForm = [];

module.exports = function(app) {
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

    app.get("/api/friends", function(req, res) {
        return res.json(friendList);
    })
}