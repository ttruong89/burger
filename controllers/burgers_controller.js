var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Create routers.
// GET
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbs_object = {
			burgers: data
		};
		console.log(hbs_object;
		res.render("index", hbs_object);
	});
});
// POST
router.post("/", function(req, res) {
	burger.insertOne([
			"burger_name", "devoured"
		], [
			req.body.burger_name, false 
		], function() {
			res.redirect("/");
		});

});
// PUT
router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

// Export routes for server.js to use.
module.exports = router;

