var express = require("express");
var app = express();
var port = 3000;

app.get("/", function(req, res) {
    res.send("it works");
})

app.listen(3000 || PROCESS.ENV.PORT, function() {
    console.log("Listening on port " + port);
})