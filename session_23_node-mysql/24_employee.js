// 24_employee.js
// https://codepen.io/nmenezes79/pen/NWmvypr

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
	var sql = "CREATE TABLE employee(Empid int, Name varchar(25), Department varchar(25), Salary int, Gender varchar(10), DOJ date)";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table created");
	});
});
