const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Present', 'Absent'],
        default: 'Present'
    },
}, { timestamps: true })

const Attendance = mongoose.model('Attendance', attendanceSchema)

module.exports = Attendance