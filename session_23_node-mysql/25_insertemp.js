// 25_insertemp.js
// https://codepen.io/nmenezes79/pen/oNrVpBM?editors=0010

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
	var sql = "INSERT INTO employee (Empid, Name, Department, Salary, Gender, DOJ) VALUES ?";
	//Make an array of values:
	var values = [
		[1001, "Aman", "Sales", 40000, "M", "2010-11-21"],
		[1002, "Suman", "Accounting", 35000, "F", "2009-09-25"],
		[1003, "Ravi", "Sales", 45000, "M", "2015-05-02"],
		[1004, "Sakshi", "Accounting", 35000, "F", "2016-06-15"]
	];
	//Execute the SQL statement, with the value array:
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number of records inserted: " + result.affectedRows);
	});
});
