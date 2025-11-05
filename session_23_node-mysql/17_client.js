// 17_client.js
// https://codepen.io/nmenezes79/pen/qBwrgza

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
	var sql = "CREATE TABLE client (c_id int, ClientName VARCHAR(25), city varchar(25), p_id varchar(20))";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table created");
	});
});
