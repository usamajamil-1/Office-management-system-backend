const Joi = require('joi')

const applicationSchema = Joi.object({
  name: Joi.string().required(),
  role: Joi.string().required(),
  status: Joi.string().valid('Pending', 'Approved', 'Rejected'),
}).options({ stripUnknown: true })

const vacancySchema = Joi.object({
  title: Joi.string().required(),
  department: Joi.string().required(),
  type: Joi.string().valid('Full-Time', 'Part-Time', 'Contract', 'Internship').required(),
  openings: Joi.number().min(1),
}).options({ stripUnknown: true })

const interviewSchema = Joi.object({
  application: Joi.string().hex().length(24).required(),
  time: Joi.date().required(),
}).options({ stripUnknown: true })

module.exports = { applicationSchema, vacancySchema, interviewSchema }