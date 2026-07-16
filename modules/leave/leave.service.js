const Leave = require('./leave.model')

const createLeave = async (data) => {
  const { employee, leaveType, fromDate, toDate, status } = data

  const leave = await Leave.create({ employee, leaveType, fromDate, toDate, status })

  return leave
}

const readLeave = async () => {
  const leave = await Leave.find().populate('employee', 'name department')

  return leave
}

const deleteLeave = async (id) => {
  const leave = await Leave.findByIdAndDelete(id)

  return leave
}

const updateLeave = async (id, data) => {
  const leave = await Leave.findByIdAndUpdate(id, data, { new: true })

  return leave
}

module.exports = { createLeave, readLeave, deleteLeave, updateLeave }