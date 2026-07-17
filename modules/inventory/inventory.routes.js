const express = require('express')
const router = express.Router()
const protect = require('../../middleware/auth')

const { createItem, readItem, deleteItem, updateItem } = require('./inventory.controller')

router.post('/', protect, createItem)
router.get('/', protect, readItem)
router.delete('/:id', protect, deleteItem)
router.put('/:id', protect, updateItem)

module.exports = router