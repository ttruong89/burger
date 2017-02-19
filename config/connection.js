// File needed to connect node to MYSQL.
var mysql = require('mysql');

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'maury210',
	database: 'burgers_db'
});


connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// Export connection according to instructions.
module.exports = connection;