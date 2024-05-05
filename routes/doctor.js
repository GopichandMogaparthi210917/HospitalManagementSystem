// Import necessary modules
const express = require('express');
const router = express.Router();
const doctorModel = require('../models/doctor');

// Route to get all doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await doctorModel.getAllDoctors();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Export router
module.exports = router;
