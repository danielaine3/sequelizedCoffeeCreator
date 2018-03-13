var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")
var app = express();
var PORT = process.env.PORT || 3000;

// var db = require("./models");

app.use(express.static(process.cwd() + '/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var router = require("./routes/api-routes.js");
app.use('/', router);

// app.use(routes);
// db.sequelize.sync({ force:true }).then(function() {
	app.listen(PORT, function() {
  		console.log("App now listening at localhost:" + PORT);
	});
// });