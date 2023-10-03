const express = require('express');
const nodemailer = require('nodemailer');


const app = express();

// POST request for Sign in
app.post('/signin', (req, res) => {
	console.log(req);
});

// POST request for Log in
app.post('/login', (req, res) => {
        console.log(req);
});

// POST request for registering courses 
app.post('/register-courses', (req, res) => {
        console.log(req);
});

// POST request for study timetable
app.post('/register-timetable', (req, res) => {
        console.log(req);
});
// GET request for Landing page/Home
app.get('/', (req, res) => {
	console.log(req);
});

// GET request for Collaborative Learning
app.get('/collaborative-learning', (req, res) => {
        console.log(req);
});

// GET request for Quiz and Rewards
app.get('/quiz-and-reward', (req, res) => {
        console.log(req);
});

// GET request for Reading scheduler
app.get('/reading-scheduler', (req, res) => {
        console.log(req);
});

app.listen(4000, () => console.log('Server runnign on port 4000! '));