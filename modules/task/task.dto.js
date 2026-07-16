const Joi = require('joi')

const taskSchema = Joi.object({
  title: Joi.string().required(),
  assignedTo: Joi.string().hex().length(24).required(),
  dueDate: Joi.date().required(),
  status: Joi.string().valid('pending', 'inProgress', 'completed'),
})

module.exports = taskSchema