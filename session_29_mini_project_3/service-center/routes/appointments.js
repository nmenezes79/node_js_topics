const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Create appointment
router.post('/', (req, res) => {
    const { user_id, service_id, appointment_date } = req.body;
    const query = 'INSERT INTO appointments (user_id, service_id, appointment_date) VALUES (?, ?, ?)';
    db.query(query, [user_id, service_id, appointment_date], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Appointment created', appointmentId: result.insertId });
    });
});

// Get all appointments
router.get('/', (req, res) => {
    const query = `
        SELECT a.id AS appointment_id, u.name AS user_name, s.name AS service_name, a.appointment_date, a.status
        FROM appointments a
        JOIN users u ON a.user_id = u.id
        JOIN services s ON a.service_id = s.id
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

// Update appointment
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { service_id, appointment_date, status } = req.body;
    const query = 'UPDATE appointments SET service_id=?, appointment_date=?, status=? WHERE id=?';
    db.query(query, [service_id, appointment_date, status, id], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Appointment updated' });
    });
});

// Delete appointment
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM appointments WHERE id=?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Appointment deleted' });
    });
});

module.exports = router;
