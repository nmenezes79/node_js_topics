// 11_furniture.js
// https://codepen.io/nmenezes79/pen/zYXZNNo

//To create a table
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
	var sql = "CREATE TABLE furniture (no int, item VARCHAR(25), type varchar(25), dateofstock date, price int, discount int)";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table Created");
	});
});
