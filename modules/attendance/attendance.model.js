const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
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