// 49_mobile_master.js
// https://codepen.io/nmenezes79/pen/rNbJOyY

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
	var sql = "CREATE TABLE MOBILE_MASTER(M_Id varchar(30), M_Company varchar(35), M_Name varchar(35), M_Price int, M_MLDate date)";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table created");
	});
});
