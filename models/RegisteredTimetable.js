const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RegisteredTimetableSchema = new Schema({
    RegistionNum: {
        type: String,
        required: true,
    },
    Monday: {
        type: String,
        required: true,
    },
    Tuesday: {
        type: String,
        required: true,
    },
    Wednessday: {
        type: String,
        required: true,
    },
    Thusday: {
        type: String,
        required: true,
    },
    Friday: {
        type: String,
        required: true,
    },
    Saturday: {
        type: String,
        required: true,
    },
    Sunday: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const RegisteredTimetable = mongoose.model('Study timetable', RegisteredTimetableSchema);
module.exports = RegisteredTimetable;