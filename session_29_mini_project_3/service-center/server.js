const express = require('express');
const bodyParser = require('body-parser');

const servicesRoutes = require('./routes/services');
const appointmentsRoutes = require('./routes/appointments');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/services', servicesRoutes);
app.use('/appointments', appointmentsRoutes);

// Root
app.get('/', (req, res) => {
    res.send('Welcome to Service Booking System API');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
