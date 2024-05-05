// Import necessary modules
const db = require('./db_connect');

// Function to fetch all users from the database
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// Function to create a new user
const createUser = async (userData) => {
    try {
        const { username, password, role } = userData;
        const query = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
        const [result] = await db.execute(query, [username, password, role]);
        return result.insertId;
    } catch (error) {
        throw error;
    }
};

// Function to retrieve a user by ID
const getUserById = async (userId) => {
    try {
        const query = 'SELECT * FROM users WHERE id = ?';
        const [user] = await db.execute(query, [userId]);
        return user[0];
    } catch (error) {
        throw error;
    }
};

// Function to update a user by ID
const updateUserById = async (userId, userData) => {
    try {
        const { username, password, role } = userData;
        const query = 'UPDATE users SET username = ?, password = ?, role = ? WHERE id = ?';
        await db.execute(query, [username, password, role, userId]);
        return true;
    } catch (error) {
        throw error;
    }
};

// Function to delete a user by ID
const deleteUserById = async (userId) => {
    try {
        const query = 'DELETE FROM users WHERE id = ?';
        await db.execute(query, [userId]);
        return true;
    } catch (error) {
        throw error;
    }
};

// Export model functions
module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
};