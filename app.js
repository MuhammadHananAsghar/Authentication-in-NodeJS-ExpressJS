const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const corsOptions = require('./config/corsOptions');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// MiddleWares
app.use(bodyParser.json());
app.use(cors(corsOptions));

connectDB();

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));