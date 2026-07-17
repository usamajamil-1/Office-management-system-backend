const Inventory = require('./inventory.model')

const createItem = async (data) => {
  const { itemName, Category, quantity, status } = data

  const item = await Inventory.create({ itemName, Category, quantity, status })

  return item
}

const readItem = async () => {
  const item = await Inventory.find()

  return item
}

const deleteItem = async (id) => {
  const item = await Inventory.findByIdAndDelete(id)

  return item
}

const updateItem = async (id, data) => {
  const item = await Inventory.findByIdAndUpdate(id, data, { new: true })

  return item
}

module.exports = { createItem, readItem, deleteItem, updateItem }