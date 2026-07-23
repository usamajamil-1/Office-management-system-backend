const Joi = require('joi')

const updateProfileSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string().pattern(/^[0-9]{11}$/),
  department: Joi.string(),
  address: Joi.string(),
}).options({ stripUnknown: true })

const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required(),
  newPassword: Joi.string().min(6).required(),
}).options({ stripUnknown: true })

module.exports = { updateProfileSchema, changePasswordSchema }