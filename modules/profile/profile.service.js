const Employee = require('../employees/employee.model')
const bcrypt = require('bcryptjs')

const getProfile = async (userId) => {
  const employee = await Employee.findById(userId).select('-password')

  if (!employee) {
    throw new Error('Employee nahi mila')
  }

  return employee
}

const updateProfile = async (userId, data) => {
  const { name, email, phone, department, address } = data

  const employee = await Employee.findByIdAndUpdate(
    userId,
    { name, email, phone, department, address },
    { new: true }
  ).select('-password')

  return employee
}

const changePassword = async (userId, currentPassword, newPassword) => {
  const employee = await Employee.findById(userId)

  if (!employee) {
    throw new Error('Employee nahi mila')
  }

  const isMatch = await bcrypt.compare(currentPassword, employee.password)

  if (!isMatch) {
    throw new Error('Current password galat hai!')
  }

  employee.password = await bcrypt.hash(newPassword, 10)
  await employee.save()
}

module.exports = { getProfile, updateProfile, changePassword }