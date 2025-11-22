const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./config/db.js');

dotenv.config({path: '../.env'});

const app = express();
const PORT = process.env.PORT || 5001;


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is starting at http://localhost:${PORT}`);
    });
});
