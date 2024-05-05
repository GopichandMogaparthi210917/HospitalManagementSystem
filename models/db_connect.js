// Import necessary modules
const mysql = require('mysql');
require('dotenv').config(); // Load environment variables from .env file

// Create MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Export the connection pool
module.exports = pool;
