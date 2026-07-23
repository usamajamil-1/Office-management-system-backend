const Joi = require('joi')

const announcementSchema = Joi.object({
  title: Joi.string().required(),
  message: Joi.string().required(),
  date: Joi.date().required(),
  type: Joi.string().valid('info', 'warning', 'important'),
}).options({ stripUnknown: true })

module.exports = announcementSchema