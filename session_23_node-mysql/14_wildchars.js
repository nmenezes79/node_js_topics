// 14_wildchars.js
// https://codepen.io/nmenezes79/pen/jORBdRX

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	/*Select all customers where the address starts with an "S":*/
	con.query("SELECT * FROM products WHERE pname LIKE '%s'", function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
