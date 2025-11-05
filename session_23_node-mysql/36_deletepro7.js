// 36_deletepro7.js
// https://codepen.io/nmenezes79/pen/RwdqVRV

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;

	var sql = "DELETE FROM products WHERE p_id = 7";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Number of records deleted: " + result.affectedRows);
	});
	con.query("SELECT * FROM products", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});

