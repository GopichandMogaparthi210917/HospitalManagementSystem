// Import necessary modules
const express = require('express');
const router = express.Router();
const medicalRecordModel = require('../models/medical_record');

// Route to get all medical records
router.get('/', async (req, res) => {
    try {
        const medicalRecords = await medicalRecordModel.getAllMedicalRecords();
        res.json(medicalRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Export router
module.exports = router;