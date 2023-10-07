const express = require('express');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');


const app = express();



// GET request for Quiz and Rewards
app.get('/api/', (req, res) => {
        // This route get quiz question from database
        res.send('Hello world');
});


app.listen(4000, () => console.log('Server running on port 4000! '));