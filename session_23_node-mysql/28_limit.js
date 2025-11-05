// 28_limit.js
// https://codepen.io/nmenezes79/pen/LYaBxeK

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	//Return the first 5 products:
	con.query("SELECT * FROM products LIMIT 5", function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
