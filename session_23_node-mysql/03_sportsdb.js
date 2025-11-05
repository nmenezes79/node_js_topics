// 03_sportsdb.js
// https://codepen.io/nmenezes79/pen/PoLNLXo

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
	// CREATE A DATABASE NAMED "sports":
	con.query("CREATE DATABASE sports", function (err, result) {
		if (err) throw err;
		console.log("Database Created");
	});
});
