var path = require("path");

module.exports = function(app) {
    //default root route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    //default survey page if user does not submit information through new user form
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    //survey page displaying user information entered from the home screen
    app.post("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
}