// 39_dropif2.js
// https://codepen.io/nmenezes79/pen/VwNQvjV?editors=0010

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;

	var sql = "DROP TABLE IF EXISTS products";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
