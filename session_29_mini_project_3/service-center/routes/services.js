const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Add new service
router.post('/', (req, res) => {
    const { name, description, price } = req.body;
    const query = 'INSERT INTO services (name, description, price) VALUES (?, ?, ?)';
    db.query(query, [name, description, price], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Service added', serviceId: result.insertId });
    });
});

// Get all services
router.get('/', (req, res) => {
    db.query('SELECT * FROM services', (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

// Update service
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const query = 'UPDATE services SET name=?, description=?, price=? WHERE id=?';
    db.query(query, [name, description, price, id], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Service updated' });
    });
});

// Delete service
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM services WHERE id=?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Service deleted' });
    });
});

module.exports = router;
