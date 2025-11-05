// 51_insertmm.js
// https://codepen.io/nmenezes79/pen/oNOEjWQ

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
	var sql = "INSERT INTO MOBILE_MASTER(M_Id, M_Company, M_Name, M_Price, M_MLDate) VALUES ?";
	//Make an array of values:
	var values = [
		["MB001", "Samsung", "Galaxy", 4500, "2013-02-12"],
		["MB003", "Nokia", "N1100", 2250, "2011-04-15"],
		["MB004", "Micromax", "Unite3", 4500, "2016-10-17"],
		["MB005", "Sony", "XperiaM", 7500, "2017-11-20"],
		["MB006", "Oppo", "SeifleEx", 8500, "2010-08-21"]
	];
	//Execute the SQL statement, with the value array:
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number of records inserted: " + result.affectedRows);
	});
});
