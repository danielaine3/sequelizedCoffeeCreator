var express = require("express");
var router = express.Router();
var db = require("../models");

//Grab sequelize connection from models object
// var sequelizeConnection = db.sequelize;

// //sync tables
// sequelizeConnection.sync();

//redirect to index
router.get('/', function(req, res) {
	res.redirect('/index');
});

//Render coffees stored in database
router.get("/index", function(req, res) {
	db.Coffees.findAll({
	}).then(function(data) {
		// res.json(dbCoffee);
		var hbsObject = {Coffees: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

//New coffee
router.post("/api/coffees", function(req,res) {
	db.Coffees.create({
		name:req.body.name
		// drank: req.body.drank
	}).then(function(data) {
		console.log(data);
		res.json(data);
	});
});

//Drink coffee
router.put("/api/coffees/:id", function(req, res) {
	db.Coffees.update({
		// name:req.body.name,
		drank:true
	}, 
	{
		where: {
			id: req.params.id
		}
	}).then(function(data) {
		res.end();
	});
});

//Delete Coffee
router.delete("/api/coffees/:id", function(req, res) {
	db.Coffees.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(data) {
		// res.redirect("/");
	});
});
module.exports = router;