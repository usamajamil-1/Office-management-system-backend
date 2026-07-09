const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true,
        enum: ['electronics', 'furniture', 'Stationery', 'vehical']
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['available', 'out of stock'],
        default: 'available'
    },
}, { timestamps: true })

const Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory