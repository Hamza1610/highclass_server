const express = require('express');
const { Long } = require('mongodb');
// const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// Schemas
const RegisteredCourses = require('./models/RegisteredCourses');
const RegisteredTimetable = require('./models/RegisteredTimetable');
const RewardCodes = require('./models/RewardCodes');
const RoomOne = require('./models/RoomOneChats');
const RoomTwo = require('./models/RoomTwoChats');
const StudentRecords = require('./models/StudentRecords');
const TestQuestions = require('./models/TestQuestions');

const app = express();
const URLDB='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

mongoose.connect(URLDB,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => app.listen(5000, () => console.log('Server running on port 5000! ')))
        .catch((err) => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// APIs
app.post('/sign-up', (req, res) => {
        // Need to structure req.body
        const formData = new StudentRecords(req.body);
        formData.save()
        .then((result) => {
                res.json(result);
        }).catch((err) => {
                res.json({'error': err })
                console.log(err);
        });
});
app.post('/course-reg', (req, res) => {
        // Need to structure req.body
        const formData = new RegisteredCourses(req.body);
        formData.save()
        .then((result) => {
                res.json(result);
        }).catch((err) => {
                res.json({'error': err })
                console.log(err);
        });
});

app.post('/time-reg', (req, res) => {
        // Need to structure req.body
        const formData = new RegisteredTimetable(req.body);
        formData.save()
        .then((result) => {
                res.json(result);
        }).catch((err) => {
                res.json({'error': err })
                console.log(err);
        });
    
});

app.post('/edit-time', (req, res) => {
        // Need to structure req.body
        RegisteredTimetable.findByIdAndUpdate(req.body)
        .then((result) => {
                console.log(result);
                res.json(result);   
        }).catch((err) => {
                console.log(err);
                res.json({'error': err });
        });
    
});

app.get('/room-one', (req, res) => {
        RoomOne.find()
        .then((result) => {
                res.json(result);
                console.log(result);
        }).catch((err) => {
                console.log(err);
                res.json({'error': err });
        });
    
});

app.get('/room-two', (req, res) => {
        RoomTwo.find()
        .then((result) => {
                res.json(result);
                console.log(result);
        }).catch((err) => {
                console.log(err);
                res.json({'error': err });
        });
});

app.get('students-list', (req, res) => {
        StudentRecords.find()
        .then((result) => {
                res.json(result);
                console.log(result);
        }).catch((err) => {
                console.log(err);
                res.json({'error': err });
        });
    
});

app.post('/postchat', (req, res) => {
        // Decide later how to configure for both rooms
        const chat = new RoomTwo(req.body);
        chat.save()
        .then((result) => {
                console.log(result);
                res.json(result);
        }).catch((err) => {
                console.log(err);
                res.json({'error': err });
        });
    
});

app.get('/quize', (req, res) => {
        // API needed to fetch quiz questions
        res.send('THis will be API fetch feature');
    
});

app.get('/exam-questions', (req, res) => {
        TestQuestions.find()
        .then((result) => {
                res.json(result);
                console.log(result);
        }).catch((err) => {
                console.log(err);
                res.json({'error': err });
        });        
    
});

app.post('/claim-reward', (req, res) => {
        RewardCodes.find()
        .then((result) => {
                res.json(result);
                console.log(result);
        }).catch((err) => {
                console.log(err);
                res.json({'error': err });
        })
    
});
