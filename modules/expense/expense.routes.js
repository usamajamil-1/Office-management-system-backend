const express = require('express')
const router = express.Router()
const protect = require('../../middleware/auth')

const { createExpense, readExpense, deleteExpense, updateExpense } = require('./expense.controller')

router.post('/', protect, createExpense)
router.get('/', protect, readExpense)
router.delete('/:id', protect, deleteExpense)
router.put('/:id', protect, updateExpense)

module.exports = router