// Import necessary modules
const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

// Route to get all users
router.get('/', async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Export router
module.exports = router;
