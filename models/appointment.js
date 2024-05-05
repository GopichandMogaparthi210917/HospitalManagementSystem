// Import necessary modules
const db = require('./db_connect');

// Function to fetch all appointments from the database
const getAllAppointments = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM appointments', (err, results) => {
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
    getAllAppointments
};
