// 53_displaymobile.js
// https://codepen.io/nmenezes79/pen/KKYQdva

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "mydb"
});

con.connect(function (err) {
	if (err) throw err;
	//Select all clients and return the result object:
	con.query("SELECT mobile_master.m_id, mobile_master.m_name, mobile_stock.m_supplier, mobile_stock.m_qty FROM mobile_master, mobile_stock where mobile_master.m_id = mobile_stock.m_id", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});
