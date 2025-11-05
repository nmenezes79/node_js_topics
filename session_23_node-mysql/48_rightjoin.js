// 48_rightjoin.js
// https://codepen.io/nmenezes79/pen/PogQPpY

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	var sql = "SELECT c_name, pname FROM customers RIGHT JOIN products ON customers.p_id = products.p_id";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});