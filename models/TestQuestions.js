const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TestQuestionSchema = new Schema({
    Questions: {
        type: String,
        required: true,
    },
    Options: {
        type: String,
        required: true,
    },
    Answer: {
        type: String,
        required: true,
    },
    Time: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const TestQuestion = mongoose.model('StudentRecord', TestQuestionSchema);
module.exports = TestQuestion;