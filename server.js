var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// MySQL port.
var PORT = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE.
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("hbs", exphbs({ defaultLayout: "main", extname: 'hbs'}));
app.set("view engine", "hbs");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});