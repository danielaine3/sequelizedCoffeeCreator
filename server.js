var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());
//handle static content
app.use(express.static("public"));

// Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var router = require("./routes/api-routes.js");
app.use('/', router);

//Start server
var PORT = process.env.PORT || 3000;
db.sequelize.sync({ force:true }).then(function() {
	app.listen(PORT, function() {
  		console.log("App now listening at localhost:" + PORT);
	});
});