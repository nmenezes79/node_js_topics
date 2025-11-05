const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public")); // Server Frontend

// API Endpoint
// Create
app.post("/api/characters", (req, res) => {
	const { cartoon_name, shows, year, fun_fact } = req.body;
	const sql = "INSERT INTO characters (cartoon_name, shows, year, fun_fact) values (?, ?, ?, ?)";

	db.query(sql, [cartoon_name, shows, year, fun_fact], (err, result) => {
		if (err) throw err;
		res.send({ message: "Character Added!", id: result.insertId });
	});
});

// Read
app.get("/api/characters", (req, res) => {
	db.query("SELECT * FROM characters", (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

// Update
app.put("/api/characters/:id", (req, res) => {
	const { id } = req.params;
	const { cartoon_name, shows, year, fun_fact } = req.body;
	const sql = "UPDATE characters SET cartoon_name = ?, shows = ?, year = ?, fun_fact = ? WHERE id = ?";

	db.query(sql, [cartoon_name, shows, year, fun_fact], (err) => {
		if (err) throw err;
		res.send({ message: "Character Updated!" });
	});
});

// Delete
app.delete("/api/characters/:id", (req, res) => {
	const { id } = req.params;

	db.query("DELETE FROM characters WHERE id = ?", [id], (err) => {
		res.send({ message: "Character Deleted!" });
	});
});

// Start Server
app.listen(PORT, () => {
	console.log(`Server Running At http://localhost:${PORT}`);
});