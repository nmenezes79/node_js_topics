// 05_createtables.js
// https://codepen.io/nmenezes79/pen/zYbqbeW

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
	/*Create a table named "customers":*/
	var sql = "CREATE TABLE products (p_id int, pname VARCHAR(255), quantity int)";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table Created");
	});
});
