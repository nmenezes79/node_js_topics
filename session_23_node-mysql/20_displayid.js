// 20_displayid.js
// https://codepen.io/nmenezes79/pen/wvZJZvv

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
	con.query("SELECT * FROM client where p_id = 'TP01' or p_id = 'BS01'", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});
