var path = require("path");

module.exports = function(app) {
    //default root route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    //survey page with information from form
    app.get("/survey", function(req, res) {
        //use object keys to convert to array and get length of object
        queryLength = Object.keys(req.query).length;
        //allow users to access page only if they enter form info
        //need to change to allow access only if name, photo, and location parameters are passed
        if (queryLength !== 0) {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        //redirect back to root until user completes form
        } else {
            res.redirect("/");
            console.log("Please complete the form on the homepage to access survey page.");
        }
    })

    //redirect to home page if user types in a url that is not survey
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}