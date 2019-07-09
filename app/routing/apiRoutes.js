var friendList = require("../data/friends.js");

module.exports = function(app) {
    app.post("/api/friends", function(req, res) {
        //get survey information and pushes into friend array
        var userInfo = req.body;
        //add the property of score into current user
        //call the score property on userScore to get array instead of passing an object
        //convert string array into integer using map
        userInfo.score = userInfo.score.map(Number);
        friendList.push(userInfo);
        console.log(friendList);
        scoreResults(res);
    })

    //display friend list array
    app.get("/api/friends", function(req, res) {
        return res.json(friendList);
    })
}

function scoreResults(res) {
    var diffArr = [];
    var scoreDiff = 0;
    //loop through friends object array and excluding current user
    for (var i = 0; i < friendList.length - 1; i++) {
        //loop through score in each friend
        for (var j = 0; j < friendList[i].score.length - 1; j++) {
            //get the index for the current user
            var currentIndex = friendList.length - 1;
            //get a positive number from the difference of scores and add it to the total
            scoreDiff += (Math.abs(friendList[i].score[j] - friendList[currentIndex].score[j]));
        }
        //push the total score difference for each friend into array
        diffArr.push(scoreDiff);
        //reset difference for every friend
        scoreDiff = 0;
    }
    //find the lowest difference and find the index for the friend
    var friendIndex = diffArr.indexOf(Math.min.apply(null, diffArr));
    // var resultArr = [friendList[friendIndex], friendList[friendList.length - 1]];
    res.send(friendList[friendIndex]);
}

//notes
//make survey page mobile responsive; maybe change layout again
//display modal on page
//maybe redo radio buttons
//make survey input required