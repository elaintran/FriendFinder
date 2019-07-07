var express = require("express");
var app = express();
var friendList = require("../data/friends.js");
console.log(friendList);
// var userForm = [];

module.exports = function(app) {
    //get information from the new user form and push into existing array
    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        friendList.push(newUser);
        console.log(newUser);
        res.json(friendList);
    })

    //display friend list array
    app.get("/api/friends", function(req, res) {
        return res.json(friendList);
    })
}