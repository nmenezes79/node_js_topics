// 45_insertcust.js
// https://codepen.io/nmenezes79/pen/MWxzmQN?editors=0010

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
	var sql = "INSERT INTO customers (c_id, c_name, city, p_id) VALUES ?";
	//Make an array of values:
	var values = [
		[101, "Ajay", "Delhi", "1"],
		[102, "Ben", "Chennai", "2"],
		[103, "Charles", "Bangalore", "3"],
		[104, "Danny", "Chennai", "4"],
		[105, "Eric", "Bangalore", "5"],
		[106, "Bosco", "Kanpur", "6"],
		[107, "Daniel", "Patna", "7"],
		[108, "John", "Bhopal", "8"],
		[109, "Jack", "Agra", "9"],
		[110, "Tiya", "Rajkot", "10"]
	];
	//Execute the SQL statement, with the value array:
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number of Records Inserted: " + result.affectedRows);
	});
});
