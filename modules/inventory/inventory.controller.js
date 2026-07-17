const inventorySchema = require('./inventory.dto')
const inventoryService = require('./inventory.service')

const createItem = async (req, res) => {
  try {
    const { error } = inventorySchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const item = await inventoryService.createItem(req.body)

    res.status(201).json({ message: 'item ban gia', item })
  } catch (error) {
    res.status(500).json({ message: error.message || 'server error' })
  }
}

const readItem = async (req, res) => {
  try {
    const item = await inventoryService.readItem()

    res.status(200).json({ message: 'item read ho gia', item })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params

    const item = await inventoryService.deleteItem(id)

    res.status(200).json({ message: 'item delete ho gaya!', item })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const updateItem = async (req, res) => {
  try {
    const { id } = req.params

    const item = await inventoryService.updateItem(id, req.body)

    res.status(200).json({ message: 'item update ho gaya!', item })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

module.exports = { createItem, readItem, deleteItem, updateItem }