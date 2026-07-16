const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['utilities', 'salaries', 'rent']
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['paid', 'unPaid'],
        default: 'unPaid'
    },
}, { timestamps: true })

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense