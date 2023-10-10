const mongoose = requireI('mongoose');

const Schema = mongoose.Schema;
const StudentRecordSchema = new Schema({
    Email: {
        type: String,
        required: true,
    },
    Course: {
        type: String,
        required: true,
    },
        RegistionNum: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const StudentRecord = mongoose.model('StudentRecord', StudentRecordSchema);
module.exports = StudentRecord;