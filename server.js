var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//make public folder available to use
app.use(express.static('app/public'));

//routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//set up port for Heroku
app.listen(port, function() {
    console.log("Listening on port " + port);
})