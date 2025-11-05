// 50_mobile_stock.js
// https://codepen.io/nmenezes79/pen/eYoVpWG

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
	var sql = "CREATE TABLE MOBILE_STOCK(S_Id varchar(10), M_Id varchar(20), M_Qty int, M_Supplier varchar(50))";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table created");
	});
});
