// Import necessary modules
const express = require('express');
const dotenv = require('dotenv');
const patientRoutes = require('./routes/patient');
const doctorRoutes = require('./routes/doctor');
const appointmentRoutes = require('./routes/appointment');
const medicalRecordRoutes = require('./routes/medical_record');
const userRoutes = require('./routes/user');
const secondEntityRoutes = require('./routes/secondEntity'); // Import routes for second entity

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Define middleware
app.use(express.json());

// Define routes
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/medical-records', medicalRecordRoutes);
app.use('/users', userRoutes);
app.use('/second-entities', secondEntityRoutes); // Use routes for second entity

// Define default route
app.get('/', (req, res) => {
    res.send('Welcome to Hospital Management System API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
