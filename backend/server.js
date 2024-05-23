const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const documentsRoutes = require('./routes/documentRoutes');
const cors = require('cors'); // Importamos CORS
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000' })); // Configuración de CORS

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
