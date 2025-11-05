// 34_shorterlib.js
// https://codepen.io/nmenezes79/pen/bGJoNGx?editors=0010

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});

con.connect(function (err) {
	if (err) throw err;
	//Return 5 customers, starting from position 2:
	con.query("SELECT name FROM library LIMIT 1, 5", function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});