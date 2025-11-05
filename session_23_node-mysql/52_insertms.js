// 52_insertms.js
// https://codepen.io/nmenezes79/pen/oNVJvVZ

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
	//Make SQL statement:
	var sql = "INSERT INTO MOBILE_STOCK(S_Id, M_Id, M_Qty, M_Supplier) VALUES ?";
	//Make an array of values:
	var values = [
		["S001", "MB004", 450, "New Vision"],
		["S002", "MB003", 250, "Praveen Gallery"],
		["S003", "MB001", 300, "Classic Mobile Store"],
		["S004", "MB006", 150, "A-one Mobiles"],
		["S005", "MB003", 150, "The Mobile"],
		["S006", "MB006", 50, "Mobile Centre"]
	];
	//Execute the SQL statement, with the value array:
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number of records inserted: " + result.affectedRows);
	});
});
