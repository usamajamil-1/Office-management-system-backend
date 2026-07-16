const Employee = require('./employee.model')
const bcrypt = require('bcryptjs')

const createEmployee = async (data) => {
  const existingEmployee = await Employee.findOne({ email: data.email })
  if (existingEmployee) {
    throw new Error('Email already exists')
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  const employee = await Employee.create({
    ...data,
    password: hashedPassword,
  })

  return employee
}

const readEmployee = async () => {
  const employees = await Employee.find().select('-password')
  return employees
}

const updateEmployee = async (id, data) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10)
  }

  const employee = await Employee.findByIdAndUpdate(id, data, {
    new: true,
  }).select('-password')

  return employee
}

const deleteEmployee = async (id) => {
  const employee = await Employee.findByIdAndDelete(id)
  return employee
}

module.exports = {
  createEmployee,
  readEmployee,
  updateEmployee,
  deleteEmployee,
}