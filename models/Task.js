const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({

    title : {
        type: String,
        required: true
    },
    assignedTo  : {
        type: String,
        required: true,
       
    },
    
    dueDate  : {
        type: Date,
        required: true
    },
    status  : {
        type: String,
        required: true,
        enum: ['pending', 'inProgress', 'completed'],
        default: 'pending'
    },

}, { timestamps: true })

const Task = mongoose.model('Task', taskSchema)

module.exports = Task