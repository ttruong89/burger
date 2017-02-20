// File needed to connect node to MYSQL.
var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'maury210',
	database: 'burgers_db'
  });
};

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// Export connection according to instructions.
module.exports = connection;