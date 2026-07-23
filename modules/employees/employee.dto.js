const Joi = require('joi')

const employeeSchema = Joi.object({
  name: Joi.string().required(),                     
  email: Joi.string().email().required(),  
  password:  Joi.string().required().min(3),        
  role :  Joi.string(),
  department: Joi.string().required(),
  phone: Joi.string().pattern(/^[0-9]{11}$/).required(),
  salary :  Joi.number().required().positive(),
  joiningDate : Joi.date().required(),
  address : Joi.string().required(),
  cnic : Joi.string().required(),

}).options({ stripUnknown: true })

module.exports = employeeSchema