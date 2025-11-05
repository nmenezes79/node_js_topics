// 22_orderbydesc.js
// https://codepen.io/nmenezes79/pen/vYMJdNP

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	//Sort by name, in descending order:
	con.query("SELECT * FROM products ORDER BY pname DESC", function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
