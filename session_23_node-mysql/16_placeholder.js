// 16_placeholder.js
// https://codepen.io/nmenezes79/pen/gOymqJv

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	var name = 'Boxes';
	var qua = 50;
	//Escape the name and the address values:
	var sql = 'SELECT * FROM products WHERE pname = ? OR quantity = ?';
	//Send an array with value(s) to replace the escaped values:
	con.query(sql, [name, qua], function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
