// 06_insert.js
// https://codepen.io/nmenezes79/pen/MWxyxME

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
	//Insert a record in the "products" table:
	var sql = "INSERT INTO products (p_id, pname, quantity) VALUES (1, 'Books', 25)";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("1 Record Inserted");
	});
});
