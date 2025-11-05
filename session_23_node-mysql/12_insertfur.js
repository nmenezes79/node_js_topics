// 12_insertfur.js
// https://codepen.io/nmenezes79/pen/PogpWrM

// Insert the records in the table
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
	var sql = "INSERT INTO furniture (no, item, type, dateofstock, price, discount) VALUES ?";
	//Make an array of values:
	var values = [
		[1, "Whitelotus", "DoubleBed", "2002-02-23", 3000, 25],
		[2, "Pinkfeathers", "BabyCot", "2002-01-29", 7000, 20],
		[3, "Dolphin", "BabyCot", "2002-02-19", 9500, 20],
		[4, "Decent", "OfficeTable", "2002-02-01", 25000, 30],
		[5, "Comfortzone", "DoubleBed", "2002-02-12", 25000, 30],
		[6, "Donald", "Baby Cot", "2002-02-24", 6500, 15]
	];
	//Execute the SQL statement, with the value array:
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number Of Records Inserted: " + result.affectedRows);
	});
});
