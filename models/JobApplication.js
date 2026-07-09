const mongoose = require('mongoose')

const jobApplicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
}, { timestamps: true })

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema)

module.exports = JobApplication