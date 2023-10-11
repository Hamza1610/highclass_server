const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RewardCodesSchema = new Schema({
    RegistionNum: {
        type: String,
        required: true,
    },
    Code: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const RewardCodes = mongoose.model('Reward Codes', RewardCodesSchema);
module.exports = RewardCodes;