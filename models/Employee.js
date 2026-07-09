const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'hr'
    },
    department: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    joiningDate: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true
    },
    password: {
    type: String,
    required: true
},
    
}, { timestamps: true })

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee