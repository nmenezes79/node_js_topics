// 40_tablestrans.js
// https://codepen.io/nmenezes79/pen/PoLxmpE

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
	var sql = "CREATE TABLE transaction(Trans_Id varchar(20), Acc_No int, Transaction_Type varchar(25), Amount int)";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table created");
	});
});
