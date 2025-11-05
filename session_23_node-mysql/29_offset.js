// 29_offset.js
// https://codepen.io/nmenezes79/pen/poBWobV

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	// USING OFFSET
	con.query("SELECT * FROM products LIMIT 5 OFFSET 1", function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});

// Note: "OFFSET 1", means starting from the second position, not the first.