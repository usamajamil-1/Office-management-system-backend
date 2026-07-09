const mongoose = require('mongoose')

const vacancySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Full-Time', 'Part-Time', 'Contract', 'Internship']
    },
    openings: {
        type: Number,
        required: true,
        default: 1
    },
}, { timestamps: true })

const Vacancy = mongoose.model('Vacancy', vacancySchema)

module.exports = Vacancy