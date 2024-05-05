// Import necessary modules
const express = require('express');
const router = express.Router();
const patientModel = require('../models/patient');

// Route to get all patients
router.get('/', async (req, res) => {
    try {
        const patients = await patientModel.getAllPatients();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Export router
module.exports = router;
