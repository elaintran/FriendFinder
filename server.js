var express = require("express");
var app = express();
var port = 3000;

app.listen(3000 || PROCESS.ENV.PORT, function() {
    console.log("Listening on port " + port);
})