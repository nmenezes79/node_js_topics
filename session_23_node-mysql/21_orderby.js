// 21_orderby.js
// https://codepen.io/nmenezes79/pen/zYXdRxp

var mysql = require("mysql");
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	//Sort the result by name
	con.query("SELECT * FROM products ORDER BY pname", function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
