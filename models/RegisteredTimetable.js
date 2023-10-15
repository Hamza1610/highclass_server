const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RegisteredTimetableSchema = new Schema({
    RegistionNum: {
        type: String,
        required: true,
    },
    Monday: [{ from: String, to: String }],
    Tuesday: [{ from: String, to: String }],
    Wednessday: [{ from: String, to: String }],
    Thusday: [{ from: String, to: String }],
    Friday: [{ from: String, to: String }],
    Saturday: [{ from: String, to: String }],
    Sunday: [{ from: String, to: String }],
}, { timestamps: true });

const RegisteredTimetable = mongoose.model('Study timetable', RegisteredTimetableSchema);
module.exports = RegisteredTimetable;