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
            //convert string array into integer using map
            friendList[friendList.length - 1].scores = userScore.score.map(Number);
            scoreResults();
        }
    })

    //display friend list array
    app.get("/api/friends", function(req, res) {
        return res.json(friendList);
    })
}

function scoreResults() {
    var diffArr = [];
    var scoreDiff = 0;
    //loop through friends object array and excluding current user
    for (var i = 0; i < friendList.length - 1; i++) {
        //loop through score in each friend
        for (var j = 0; j < friendList[i].scores.length - 1; j++) {
            //get the index for the current user
            var currentIndex = friendList.length - 1;
            //get a positive number from the difference of scores and add it to the total
            scoreDiff += (Math.abs(friendList[i].scores[j] - friendList[currentIndex].scores[j]));
        }
        //push the total score difference for each friend into array
        diffArr.push(scoreDiff);
        //reset difference for every friend
        scoreDiff = 0;
    }
    //find the lowest difference and display user as result
    var friendIndex = diffArr.indexOf(Math.min.apply(null, diffArr));
    console.log(friendIndex);
}

//notes
//make survey page mobile responsive; maybe change layout again
//check difference between the scores of user and friends
//display modal on page
//maybe redo radio buttons
//check if user image url is valid or invalid
//find a placeholder image for survey