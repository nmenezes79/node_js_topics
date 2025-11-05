// 04_booksdb.js
// https://codepen.io/nmenezes79/pen/KKjYWMp?editors=0010

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
	// CREATE A DATABASE NAMED "books":
	con.query("CREATE DATABASE books", function (err, result) {
		if (err) throw err;
		console.log("Database Created");
	});
});
