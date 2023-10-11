const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RoomOneSchema = new Schema({
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

const RoomOne = mongoose.model('RoomOne chats', RoomOneSchema);
module.exports = RoomOne;