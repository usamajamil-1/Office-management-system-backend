const Joi = require('joi')

const inventorySchema = Joi.object({
  itemName: Joi.string().required(),
  Category: Joi.string().valid('electronics', 'furniture', 'Stationery', 'vehical').required(),
  quantity: Joi.number().min(0).required(),
  status: Joi.string().valid('available', 'out of stock'),
}).options({ stripUnknown: true })

module.exports = inventorySchema