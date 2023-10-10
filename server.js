const express = require('express');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const URLDB='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

mongoose.connect(URLDB,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => app.listen(4000, () => console.log('Server running on port 4000! ')))
        .catch((err) => console.log(err));

const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

// APIs
app.get('/', (req,res) => { 
        res.json({ response : 'API routed'});
 })