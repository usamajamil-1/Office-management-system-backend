const Joi = require('joi')

const attendanceSchema = Joi.object({
  employee: Joi.string().hex().length(24).required(),
  date: Joi.date().required(),
  status: Joi.string().valid('Present', 'Absent'),
})

module.exports = attendanceSchema