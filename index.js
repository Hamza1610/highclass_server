const express = require('express');
const { Long } = require('mongodb');
// const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// Schemas
// const RegisteredCourses = require('./models/RegisteredCourses');
// const RegisteredTimetable = require('./models/RegisteredTimetable');
// const RewardCodes = require('./models/RewardCodes');
// const RoomOne = require('./models/RoomOneChats');
// const RoomTwo = require('./models/RoomTwoChats');
// const StudentRecord = require('./models/StudentRecords');
// const TestQuestion = require('./models/TestQuestions');

const app = express();
const URLDB='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

// mongoose.connect(URLDB,{ useNewUrlParser: true, useUnifiedTopology: true })
//         .then((result) => app.listen(5000, () => console.log('Server running on port 5000! ')))
//         .catch((err) => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// APIs
app.get('/', (req, res) => {
        res.send('Hello world');
});

app.get('/api/', (req, res) => {
        res.send('Hello Again');
    
    });

app.listen(5000, () => console.log('Server running on port 5000! '))