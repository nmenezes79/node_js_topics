// 33_limitlib.js
// https://codepen.io/nmenezes79/pen/ExMpZpM

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});

con.connect(function (err) {
	if (err) throw err;
	//Return the first 5 customers:
	con.query("SELECT mem_name FROM library LIMIT 3", function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
