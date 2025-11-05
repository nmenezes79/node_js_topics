// 19_displayh.js
// https://codepen.io/nmenezes79/pen/RwOpdXE

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});

con.connect(function (err) {
	if (err) throw err;
	//Select all clients and return the result object:
	con.query("SELECT ClientName FROM client where ClientName like '%h'", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});
