// 44_tablescust.js
// https://codepen.io/nmenezes79/pen/ExMOmQV?editors=0010

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
	var sql = "CREATE TABLE customers (c_id int, c_name VARCHAR(255), city VARCHAR(255), p_id int)";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table Created");
	});
});
