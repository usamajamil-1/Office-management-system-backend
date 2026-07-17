const Payroll = require('./payroll.model')

const createPayroll = async (data) => {
  const { employee, department, basicSalary, deduction, status } = data

  const payroll = await Payroll.create({ employee, department, basicSalary, deduction, status })

  return payroll
}

const readPayroll = async () => {
  const payroll = await Payroll.find().populate('employee', 'name department')

  return payroll
}

const deletePayroll = async (id) => {
  const payroll = await Payroll.findByIdAndDelete(id)

  return payroll
}

const updatePayroll = async (id, data) => {
  const payroll = await Payroll.findById(id)

  if (!payroll) {
    throw new Error('payroll not found')
  }

  Object.assign(payroll, data)
  await payroll.save()

  return payroll
}

module.exports = { createPayroll, readPayroll, deletePayroll, updatePayroll }