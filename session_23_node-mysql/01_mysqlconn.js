// 01_mysqlconn.js
// https://codepen.io/nmenezes79/pen/RwORzWz

// INCLUDE MYSQL MODULE
var mysql = require('mysql');

// CONNECTION TO MYSQL WORKBENCH
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123"
});

// CREATE A NEW CONNECTION
con.connect(function (err) {
	if (err) {
		console.log('Error Connecting To Database', err);
		return;
	}
	console.log('Connection Established');
});