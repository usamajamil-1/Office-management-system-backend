const Expense = require('../models/Expense')

const createExpense = async (req, res) => {
    try {
        const { category, amount, date, status } = req.body

        const expense = await Expense.create({
            category, amount, date, status
        })

        res.status(201).json({
            message: 'expense ban gia',
            expense
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const readExpense = async (req, res) => {
    try {
        const expense = await Expense.find()

        res.status(200).json({
            message: 'expense read ho gia',
            expense
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params

        const expense = await Expense.findByIdAndDelete(id)

        res.status(200).json({
            message: 'expense delete ho gaya!',
            expense
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const updateExpense = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        const expense = await Expense.findByIdAndUpdate(id, data, { new: true })

        res.status(200).json({
            message: 'expense update ho gaya!',
            expense
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = { createExpense, readExpense, deleteExpense, updateExpense }