const express = require('express')
const router = express.Router()
const protect = require('../../middleware/auth')

const { createTask, readTask, deleteTask, updateTask } = require('./task.controller')

router.post('/', protect, createTask)
router.get('/', protect, readTask)
router.delete('/:id', protect, deleteTask)
router.put('/:id', protect, updateTask)

module.exports = router