const Expense = require('./expense.model')

const createExpense = async (data) => {
  const { category, amount, date, status } = data

  const expense = await Expense.create({ category, amount, date, status })

  return expense
}

const readExpense = async () => {
  const expense = await Expense.find()

  return expense
}

const deleteExpense = async (id) => {
  const expense = await Expense.findByIdAndDelete(id)

  return expense
}

const updateExpense = async (id, data) => {
  const expense = await Expense.findByIdAndUpdate(id, data, { new: true })

  return expense
}

module.exports = { createExpense, readExpense, deleteExpense, updateExpense }