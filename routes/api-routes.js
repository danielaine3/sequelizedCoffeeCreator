var express = require("express");
var router = express.Router();
var db = require("../models");
var sequelizeConnection = db.sequelize;

sequelizeConnection.sync();

router.get("/", function(req, res) {
	db.Coffees.findAll({
	}).then(function(dbCoffees) {
		// res.json(dbCoffee);
		var hbsObject = {Coffees: dbCoffees};
		res.render('index', hbsObject);
	});
	// .catch(function(err) {
	// 	res.json(err);
	// });
});
router.post("/api/coffees", function(req,res) {
	console.log(req.body);
	db.Coffees.create({
		name:req.body.name,
		drank: req.body.drank
	}).then(function(dbCoffees) {
		res.redirect("/");
	})
	// .catch(function(err) {
	// 	res.json(err);
	// });
});
router.put("/api/coffees/:id", function(req, res) {
	db.Coffees.update({
		name:req.body.name,
		drank:req.body.drank
	}, {
		where: {
			id: req.body.id
		}
	}).then(function(dbCoffees) {
		res.redirect("/");
	})
	// .catch(function(err) {
	// 	res.json(err);
	// });
});
router.delete("/api/coffees/:id", function(req, res) {
	db.Coffees.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(dbCoffees) {
		res.redirect("/");
	});
});
module.exports = router;