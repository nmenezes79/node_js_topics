// 41_inserttrans.js
// https://codepen.io/nmenezes79/pen/ZEPmKKd?editors=0010

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
	var sql = "INSERT INTO transaction(Trans_Id, Acc_No, Transaction_Type, Amount) VALUES ?";
	//Make an array of values:
	var values = [
		["Tr001", 2301003, "Credit", 15000],
		["Tr002", 2201002, "Credit", 20000],
		["Tr003", 2101001, "Debit", 3500],
		["Tr004", 2301003, "Credit", 26000],
		["Tr005", 2301003, "Credit", 24000]
	];
	//Execute the SQL statement, with the value array:
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number of records inserted: " + result.affectedRows);
	});
});
