const mongoose = require('mongoose')

const announcementSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['info', 'warning', 'important'],
        default: 'info'
    },

}, { timestamps: true })

const Announcement = mongoose.model('Announcement', announcementSchema)

module.exports = Announcement