//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//express app
var app = express();
var PORT = process.env.PORT || 3000;

//data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:truee}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.use(express.static(__dirname + '/public'));