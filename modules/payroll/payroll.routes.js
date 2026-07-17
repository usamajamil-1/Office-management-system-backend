const express = require('express')
const router = express.Router()
const protect = require('../../middleware/auth')

const { createPayroll, readPayroll, deletePayroll, updatePayroll } = require('./payroll.controller')

router.post('/', protect, createPayroll)
router.get('/', protect, readPayroll)
router.delete('/:id', protect, deletePayroll)
router.put('/:id', protect, updatePayroll)

module.exports = router