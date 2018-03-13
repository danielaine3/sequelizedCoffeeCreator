var express = require("express");
var router = express.Router();
var db = require("../models");
var sequelizeConnection = db.sequelize;

sequelizeConnection.sync();


router.get("/", function(req, res) {
	console.log("here");
	db.Coffee.findAll({
	}).then(function(dbCoffee) {
		// res.json(dbCoffee);
		var hbsObject = {Coffee: dbCoffee};
		res.render('index', hbsObject);
	})
	// .catch(function(err) {
	// 	res.json(err);
	// });
});
router.post("/api/coffee", function(req,res) {
	console.log(req.body);
	db.Coffee.create({
		name:req.body.text,
		drank: req.body.drank
	}).then(function(dbCoffee) {
		res.redirect("/");
	})
	// .catch(function(err) {
	// 	res.json(err);
	// });
});
router.put("/api/coffee/:id", function(req, res) {
	db.Coffee.update({
		name:req.body.name,
		drank:req.body.drank
	}, {
		where: {
			id: req.body.id
		}
	}).then(function(dbCoffee) {
		res.redirect("/");
	})
	// .catch(function(err) {
	// 	res.json(err);
	// });
});
router.delete("/api/coffee/:id", function(req, res) {
	db.Coffee.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(dbCoffee) {
		res.redirect("/");
	});
});
module.exports = router;