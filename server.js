const express = require('express');
const nodemailer = require('nodemailer');


const app = express();

app.listen(4000, () => console.log('Server runnign on port 4000! '))

// PUSH request for Sign in
app.get('/signin', (req, res) => {
	console.log('GET request placed');
});

// PUSH request for Log in
app.get('/login', (req, res) => {
        console.log('GET request placed');
});

// PUSH request for registering courses 
app.get('/register-courses', (req, res) => {
        console.log(res);
});

// PUSH request for study timetable
app.get('/register-timetable', (req, res) => {
        console.log('GET request placed');
});
// GET request for Landing page/Home
app.get('/', (req, res) => {
	        console.log('GET request placed');
});

// GET request for Collaborative Learning
app.get('/collaborative-learning', (req, res) => {
        console.log('GET request placed');
});

// GET request for Quiz and Rewards
app.get('/quiz-and-reward', (req, res) => {
        console.log('GET request placed');
});

// GET request for Reading scheduler
app.get('/reading-scheduler', (req, res) => {
        console.log('GET request placed');
});