const Employee = require('../employees/employee.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = async (data) => {
  const { name, email, password, role } = data

  const existingEmployee = await Employee.findOne({ email })

  if (existingEmployee) {
    throw new Error('Email pehle se registered hai!')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const employee = await Employee.create({
    name,
    email,
    password: hashedPassword,
    role,
    department: 'Admin',
    phone: '00000000000',
    salary: 0,
    joiningDate: new Date(),
    address: 'Admin',
    cnic: '00000-0000000-0',
  })

  return employee
}

const login = async (email, password) => {
  const employee = await Employee.findOne({ email })

  if (!employee) {
    throw new Error('Email registered nahi hai!')
  }

  const isMatch = await bcrypt.compare(password, employee.password)

  if (!isMatch) {
    throw new Error('Password galat hai!')
  }

  const token = jwt.sign(
    { id: employee._id, role: employee.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )

  const employeeWithoutPassword = await Employee.findById(employee._id).select('-password')

  return { token, user: employeeWithoutPassword }
}

module.exports = { signup, login }