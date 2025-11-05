// 07_insertmul.js
// https://codepen.io/nmenezes79/pen/xxBOogd

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
	var sql = "INSERT INTO products (p_id, pname, quantity) VALUES ?";
	//Make an array of values:
	var values = [
		[2, 'Erasers', 30],
		[3, 'Notebooks', 20],
		[4, 'Pencils', 35],
		[5, 'Pens', 50],
		[6, 'Sketch pens', 25],
		[7, 'Pencil colours', 20],
		[8, 'Crayons', 36],
		[9, 'Pasted colours', 12],
		[10, 'Water colours', 17],
		[11, 'Canvas', 60],
		[12, 'Brushes', 53],
		[13, 'Files', 37],
		[14, 'Folders', 56],
		[15, 'Boxes', 50]
	];
	//Execute the SQL statement, with the value array:
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number Of Records Inserted: " + result.affectedRows);
	});
});
