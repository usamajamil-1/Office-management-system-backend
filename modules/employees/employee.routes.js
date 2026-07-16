const express = require('express')
const router = express.Router()
const protect = require('../../middleware/auth')

const {
  createEmployee,
  readEmployee,
  updateEmployee,
  deleteEmployee,
} = require('./employee.controller')

router.post('/', protect, createEmployee)
router.get('/', protect, readEmployee)
router.put('/:id', protect, updateEmployee)
router.delete('/:id', protect, deleteEmployee)

module.exports = router