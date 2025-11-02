const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(bodyParser.json());

/* - PRODUCT ROUTES - */

// Add Product
app.post("/products", (req, res) => {
    const { name, category, price, quantity } = req.body;
    if (!name || !price || !quantity) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    const sql = "INSERT INTO products (name, category, price, quantity) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, category, price, quantity], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Product added", id: result.insertId });
    });
});

// View Products
app.get("/products", (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Update Product
app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, category, price, quantity } = req.body;
    const sql = "UPDATE products SET name=?, category=?, price=?, quantity=? WHERE id=?";
    db.query(sql, [name, category, price, quantity, id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Product updated" });
    });
});

// Delete Product
app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM products WHERE id=?", [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Product deleted" });
    });
});

/* - EXPORT ROUTES - */

// Add Export
app.post("/exports", (req, res) => {
    const { product_id, destination, export_date, quantity } = req.body;
    if (!product_id || !destination || !export_date || !quantity) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    const sql = "INSERT INTO exports (product_id, destination, export_date, quantity) VALUES (?, ?, ?, ?)";
    db.query(sql, [product_id, destination, export_date, quantity], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Export record added", id: result.insertId });
    });
});

// View Exports
app.get("/exports", (req, res) => {
    db.query(
        "SELECT e.id, p.name AS product, e.destination, e.export_date, e.quantity FROM exports e JOIN products p ON e.product_id = p.id",
        (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        }
    );
});

// Update Export
app.put("/exports/:id", (req, res) => {
    const { id } = req.params;
    const { product_id, destination, export_date, quantity } = req.body;
    const sql = "UPDATE exports SET product_id=?, destination=?, export_date=?, quantity=? WHERE id=?";
    db.query(sql, [product_id, destination, export_date, quantity, id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Export updated" });
    });
});

// Delete Export
app.delete("/exports/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM exports WHERE id=?", [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Export deleted" });
    });
});


/* - START SERVER - */
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
