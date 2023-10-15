const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RegisteredCoursesSchema = new Schema({
    RegNum: {
        type: String,
        required: true,
    },
    Courses: {
        type: Array,
        require: true,
    },

}, { timestamps: true });

const RegisteredCourses = mongoose.model('Courses registered', RegisteredCoursesSchema);
module.exports = RegisteredCourses;