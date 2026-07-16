const Joi = require('joi')

const leaveSchema = Joi.object({
  employee: Joi.string().hex().length(24).required(),
  leaveType: Joi.string().valid('Sick Leave', 'Casual Leave').required(),
  fromDate: Joi.date().required(),
  toDate: Joi.date().min(Joi.ref('fromDate')).required(),
  status: Joi.string().valid('pending', 'approved', 'rejected'),
})

module.exports = leaveSchema