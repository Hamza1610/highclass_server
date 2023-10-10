const mongoose = requireI('mongoose');

const Schema = mongoose.Schema;
const RegisteredCoursesSchema = new Schema({
    RegNum: {
        type: String,
        required: true,
    },
    Courses: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const RegisteredCourses = mongoose.model('Courses registered', RegisteredCoursesSchema);
module.exports = RegisteredCourses;