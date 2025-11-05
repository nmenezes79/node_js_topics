// 15_escape.js
// https://codepen.io/nmenezes79/pen/eYovxaO

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	var qua = 25;
	//Escape the address value:
	var sql = 'SELECT * FROM products WHERE quantity = ' + mysql.escape(qua);
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
