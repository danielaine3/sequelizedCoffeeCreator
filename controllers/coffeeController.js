var db = require("../models");
module.exports = function(app) {
	app.get("/", function(req, res) {
		db.Coffee.findAll({}).then(function(dbCoffee) {
			res.json(dbCoffee);
		});
	});
	app.post("/api/coffee", function(req,res) {
		console.log(req.body);
		db.Coffee.create({
			name:req.body.text,
			drank: req.body.drank
		}).then(function(dbCoffee) {
			res.json(dbCoffee);
		}).catch(function(err) {
			res.json(err);
		});
	});
	app.put("/api/coffee/:id", function(req, res) {
		db.Coffee.update({
			name:req.body.name,
			drank:req.body.drank
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(dbCoffee) {
			res.json(dbCoffee);
		}).catch(function(err) {
			res.json(err);
		});
	});
	app.delete("/api/coffee/:id", function(req, res) {
		db.Coffee.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbCoffee) {
			res.json(dbCoffee);
		});
	});
}