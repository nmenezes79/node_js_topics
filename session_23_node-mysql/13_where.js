// 13_where.js
// https://codepen.io/nmenezes79/pen/YzMZBMV

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	/*Select all customers with the address "Park Lane 38":*/
	con.query("SELECT * FROM products WHERE pname = 'pencils'", function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
