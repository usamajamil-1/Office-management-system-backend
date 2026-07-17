const Joi = require('joi')

const payrollSchema = Joi.object({
  employee: Joi.string().hex().length(24).required(),
  department: Joi.string().required(),
  basicSalary: Joi.number().positive().required(),
  deduction: Joi.number().min(0),
  status: Joi.string().valid('Paid', 'UnPaid'),
})

module.exports = payrollSchema