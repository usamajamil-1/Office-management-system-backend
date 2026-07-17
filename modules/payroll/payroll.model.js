const mongoose = require('mongoose')

const payrollSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
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

payrollSchema.pre('save', function (next) {
    this.netSalary = this.basicSalary - this.deduction
    next()
})

const Payroll = mongoose.model('Payroll', payrollSchema)

module.exports = Payroll