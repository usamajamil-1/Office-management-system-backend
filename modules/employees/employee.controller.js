const employeeSchema = require('./employee.dto')
const employeeService = require('./employee.service')

const createEmployee = async (req, res) => {
  try {
    const { error } = employeeSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      })
    }

    const employee = await employeeService.createEmployee(req.body)

    res.status(201).json({
      message: 'Employee created successfully',
      employee,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Server error',
    })
  }
}

const readEmployee = async (req, res) => {
  try {
    const employees = await employeeService.readEmployee()

    res.status(200).json({
      message: 'Employee fetched successfully',
      employee: employees,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
    })
  }
}

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params

    const employee = await employeeService.updateEmployee(id, req.body)

    res.status(200).json({
      message: 'Employee updated successfully',
      employee,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
    })
  }
}

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params

    const employee = await employeeService.deleteEmployee(id)

    res.status(200).json({
      message: 'Employee deleted successfully',
      employee,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
    })
  }
}

module.exports = {
  createEmployee,
  readEmployee,
  updateEmployee,
  deleteEmployee,
}