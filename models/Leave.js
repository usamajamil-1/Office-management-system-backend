const mongoose = require('mongoose')
const leaveSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    leaveType  : {
        type: String,
        required: true,
        enum: ['Sick Leave', 'Casual Leave'],
    },
    fromDate  : {
        type: String,
        required: true
    },
    toDate  : {
        type: String,
        required: true
    },
    status  : {
        type: String,
        required: true,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },

}, { timestamps: true })

const Leave = mongoose.model('Leave', leaveSchema)

module.exports = Leave