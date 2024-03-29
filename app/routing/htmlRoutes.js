var path = require("path");

module.exports = function(app) {
    //default root route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    //survey page with information from form
    app.get("/survey", function(req, res) {
        //if query includes name, photo, and location, allow access to survey page
        if (req.query.name && req.query.photo && req.query.location) {
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