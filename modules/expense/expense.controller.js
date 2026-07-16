const expenseSchema = require('./expense.dto')
const expenseService = require('./expense.service')

const createExpense = async (req, res) => {
  try {
    const { error } = expenseSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const expense = await expenseService.createExpense(req.body)

    res.status(201).json({ message: 'expense ban gia', expense })
  } catch (error) {
    res.status(500).json({ message: error.message || 'server error' })
  }
}

const readExpense = async (req, res) => {
  try {
    const expense = await expenseService.readExpense()

    res.status(200).json({ message: 'expense read ho gia', expense })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params

    const expense = await expenseService.deleteExpense(id)

    res.status(200).json({ message: 'expense delete ho gaya!', expense })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params

    const expense = await expenseService.updateExpense(id, req.body)

    res.status(200).json({ message: 'expense update ho gaya!', expense })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

module.exports = { createExpense, readExpense, deleteExpense, updateExpense }