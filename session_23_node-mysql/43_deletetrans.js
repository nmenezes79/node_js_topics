// 43_deletetrans.js
// https://codepen.io/nmenezes79/pen/ZEPmKJd?editors=0010

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});

con.connect(function (err) {
	if (err) throw err;

	var sql = "DROP TABLE transaction";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table deleted");
	});
});
