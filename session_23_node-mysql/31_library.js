// 31_library.js
// https://codepen.io/nmenezes79/pen/GReBrBj

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
	var sql = "CREATE TABLE library(Bid varchar(25),  Name varchar(25), Author varchar(25), Price int, Mem_name varchar(25), Issue_Date date, Status varchar(25))";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table created");
	});
});
