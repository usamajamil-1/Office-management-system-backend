const mongoose = require('mongoose')

const interviewSchema = new mongoose.Schema({
    application: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobApplication',
        required: true
    },
    time: {
        type: Date,
        required: true
    },
}, { timestamps: true })

const Interview = mongoose.model('Interview', interviewSchema)

module.exports = Interview