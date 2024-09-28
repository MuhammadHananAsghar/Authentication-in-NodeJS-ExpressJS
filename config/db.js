const mongoose = require('mongoose');

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB = async () => {
    await mongoose.connect(process.env.DATABASE_URI, clientOptions)
    .then(() => {
        console.log('MongoDB connected...');
    }).catch((error) => {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    })
}

module.exports = connectDB;