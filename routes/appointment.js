// Import necessary modules
const express = require('express');
const router = express.Router();
const appointmentModel = require('../models/appointment');

// Route to get all appointments
router.get('/', async (req, res) => {
    try {
        const appointments = await appointmentModel.getAllAppointments();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Export router
module.exports = router;
