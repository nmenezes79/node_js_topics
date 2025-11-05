// 27_updateemp.js
// https://codepen.io/nmenezes79/pen/gOyxvop

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});

con.connect(function (err) {
	if (err) throw err;
	//Select all clients and return the result object:
	con.query("update employee set salary = 50000 where salary = 35000", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});
