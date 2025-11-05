// 10_fields.js
// https://codepen.io/nmenezes79/pen/gOEMNGZ

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	//Select all customers and return the result object:
	con.query("SELECT * FROM products", function (err, result, fields) {
		if (err) throw err;
		// console.log(result[2].pname);
		console.log(fields)
	});
});
