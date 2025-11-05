// 02_createdb.js
// https://codepen.io/nmenezes79/pen/dyrMrjQ

// INCLUDE MYSQL MODULE
var mysql = require('mysql');

// CONNECTION TO MYSQL WORKBENCH
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123"
});

// CREATE A NEW DATABASE
con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
	/* CREATE A DATABASE NAMED "mydb": */
	con.query("CREATE DATABASE mydb", function (err, result) {
		if (err) throw err;
		console.log("Database Created");
	});
});
