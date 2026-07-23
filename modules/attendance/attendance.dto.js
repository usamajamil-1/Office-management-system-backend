const Joi = require('joi')

const attendanceSchema = Joi.object({
  employee: Joi.string().hex().length(24).required(),
  status: Joi.string().valid('Present', 'Absent'),
}).options({ stripUnknown: true })

module.exports = attendanceSchema