const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RoomTwoSchema = new Schema({
    RegistionNum: {
        type: String,
        required: true,
    },
    Message: {
        type: String,
        required: true,
    },
    Time: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const RoomTwo = mongoose.model('RoomTwo chats', RoomTwoSchema);
module.exports = RoomTwo;