const mysql = require("mysql");

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "cartoonhub"
});

db.connect(err => {
	if (err) throw err;
	console.log("Connected To MySQL Database: cartoonhub");
});

module.exports = db;