const Inventory = require('../models/Inventory')

const createItem = async (req, res) => {
    try {
        const { itemName, Category, quantity, status } = req.body

        const item = await Inventory.create({
            itemName, Category, quantity, status
        })

        res.status(201).json({
            message: 'item ban gia',
            item
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const readItem = async (req, res) => {
    try {
        const item = await Inventory.find()

        res.status(200).json({
            message: 'item read ho gia',
            item
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params

        const item = await Inventory.findByIdAndDelete(id)

        res.status(200).json({
            message: 'item delete ho gaya!',
            item
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const updateItem = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        const item = await Inventory.findByIdAndUpdate(id, data, { new: true })

        res.status(200).json({
            message: 'item update ho gaya!',
            item
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = { createItem, readItem, deleteItem, updateItem }