const mongoose = require('mongoose')

const payrollSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    basicSalary: {
        type: Number,
        required: true
    },
    deduction: {
        type: Number,
        required: true,
        default: 0
    },
    netSalary: {
        type: Number
    },
    status: {
        type: String,
        required: true,
        enum: ['Paid', 'UnPaid'],
        default: 'UnPaid'
    },
}, { timestamps: true })

// netSalary hamesha basicSalary - deduction se calculate hoga
payrollSchema.pre('save', function (next) {
    this.netSalary = this.basicSalary - this.deduction
    next()
    
})

const Payroll = mongoose.model('Payroll', payrollSchema)

module.exports = Payroll