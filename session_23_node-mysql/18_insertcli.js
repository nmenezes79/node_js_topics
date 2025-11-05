// 18_insertcli.js
// https://codepen.io/nmenezes79/pen/bGJqZyb

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
	var sql = "INSERT INTO client (c_id,  ClientName, City, P_ID) VALUES ?";
	//Make an array of values:
	var values = [
		[1, "Cosmetic Shop", "Delhi", "TP01"],
		[2, "Total Health", "Mumbai", "FW05"],
		[3, "Live Life", "Delhi", "BS01"],
		[4, "Pretty Woman", "Delhi", "SHO6"],
		[5, "Dreams", "Delhi", "FW12"]
	];
	//Execute the SQL statement, with the value array:
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number of Records Inserted: " + result.affectedRows);
	});
});
