const Joi = require('joi')

const expenseSchema = Joi.object({
  category: Joi.string().valid('utilities', 'salaries', 'rent').required(),
  amount: Joi.number().positive().required(),
  date: Joi.date().required(),
  status: Joi.string().valid('paid', 'unPaid'),
})

module.exports = expenseSchema