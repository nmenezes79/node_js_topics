// 23_update.js
// https://codepen.io/nmenezes79/pen/rNRrjWK

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	//Update the address field:
	var sql = "UPDATE products SET quantity = 70 WHERE quantity = 50";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result.affectedRows + " record(s) updated");
	});
});
