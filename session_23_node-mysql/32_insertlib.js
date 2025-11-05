// 32_insertlib.js
// https://codepen.io/nmenezes79/pen/poYZRZV?editors=0010

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
	var sql = "INSERT INTO library( Bid, Name, Author, Price, Mem_name, Issue_Date, Status) VALUES ?";
	//Make an array of values:
	var values = [
		["B01", "Wings of Fire", "A.P.J Abdul Kalam", 550, "Santa", "2018-05-20", "Returned"],
		["B02", "The Monk sold his Ferrari", "Robin Sharma", 340, "Simmi", "2018-03-15", "Not Returned"],
		["B03", "You can win", "Shiv Khera", 230, "Rajat", "2018-04-16", "Returned"],
		["B04", "Who moved my cheese", "Spencer Jhonson", 450, "Ram", "2018-03-17", "Not Returned"],
		["B05", "Real Success", "Patrick Mather- Pike", 250, "Sia", "2018-06-18", "Not Returned"]
	];
	//Execute the SQL statement, with the value array:
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number of records inserted: " + result.affectedRows);
	});
});