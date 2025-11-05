// 30_shorter.js
// https://codepen.io/nmenezes79/pen/abMjpYM

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	// USING LIMIT INSTEAD OF OFFSET
	con.query("SELECT * FROM products LIMIT 1, 5", function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});