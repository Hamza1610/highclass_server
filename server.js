const express = require('express');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');


const app = express();

// POST request for Sign in
app.post('/sign-in', (req, res) => {
        const {email, department, reg_num, password } = req.body;
        console.log(email, department, reg_num, password);
});

// POST request for Log in
app.post('/log-in', (req, res) => {
        console.log(req.body);
});

// POST request for registering courses 
app.post('/register-courses', (req, res) => {
        const courses_registered = req.body;
        console.log(courses_registered);
});

// POST request for study timetable
app.post('/register-timetable', (req, res) => {
        // This is a place to use the calendar api, for daily and timely reminder
        const register_timetable_data = req.body;
        console.log(register_timetable_data);
});
// GET request for Landing page/Home
app.get('/', (req, res) => {
	res.send('Home')
});

// GET request for Collaborative Learning
app.get('/api/collaborative-learning', (req, res) => {
        // This route do nothing but it sub domain does
        res.send('Collaborative Learning');
});

// GET request for Collaborative Learning / group discussion
app.get('/api/collaborative-learning/group-discussion', (req, res) => {
        // This route is a chat app
        res.send('Collaborative Learning - group discussion');
});
// GET request for Collaborative Learning / search for reading partner
app.get('/api/collaborative-learning/group-partner-search', (req, res) => {
        // This route search for interested student for group study
        res.send('Collaborative Learning - group partner search');
});

// GET request for Quiz and Rewards
app.get('/api/quiz-and-reward', (req, res) => {
        // This route get quiz question from database
        res.send('Quiz and reward');
});

// GET request for Reading scheduler
app.get('/api/reading-scheduler', (req, res) => {
        res.send('Reading Scheduler');
});

app.listen(4000, () => console.log('Server running on port 4000! '));