// Import necessary modules
const db = require('./db_connect');

// Function to fetch all patients from the database
const getAllPatients = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM patients', (err, results) => {
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
    getAllPatients
};
