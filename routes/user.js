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

// Create a new user
router.post('/users', async (req, res) => {
    try {
        const userId = await userModel.createUser(req.body);
        res.status(201).json({ userId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get user by ID
router.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.getUserById(userId);
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update user by ID
router.put('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        await userModel.updateUserById(userId, req.body);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete user by ID
router.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        await userModel.deleteUserById(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Export router
module.exports = router;
