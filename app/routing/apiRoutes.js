var friendList = require("../data/friends.js");

module.exports = function(app) {
    app.post("/api/friends", function(req, res) {
        //get information from the new user form and push into friend object array
        //will use this information to display on survey page
        if (req.body.name) {
            var newUser = req.body;
            friendList.push(newUser);
        //get survey information and pushes score into current user array
        } else {
            var userScore = req.body;
            //add the property of score into current user
            //call the score property on userScore to get array instead of passing an object
            friendList[friendList.length - 1].score = userScore.score;
            res.json(friendList);
        }
    })

    //display friend list array
    app.get("/api/friends", function(req, res) {
        return res.json(friendList);
    })
}