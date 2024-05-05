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

// Export model functions
module.exports = {
    getAllUsers
};