const Employee = require('../employees/employee.model')
const Task = require('../task/task.model')
const Expense = require('../expense/expense.model')
const Inventory = require('../inventory/inventory.model')
const Leave = require('../leave/leave.model')
const Attendance = require('../attendance/attendance.model')

const getSummary = async () => {
  const [totalEmployees, totalTasks, totalExpenses, totalLeaves, totalInventory] = await Promise.all([
    Employee.countDocuments(),
    Task.countDocuments(),
    Expense.countDocuments(),
    Leave.countDocuments(),
    Inventory.countDocuments(),
  ])

  return {
    totalEmployees,
    totalTasks,
    totalExpenses,
    totalLeaves,
    totalInventory,
  }
}

const getDashboardStats = async () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [totalEmployees, presentToday, onLeave, pendingTasks] = await Promise.all([
    Employee.countDocuments(),
    Attendance.countDocuments({ date: today, status: 'Present' }),
    Leave.countDocuments({ status: 'approved', fromDate: { $lte: today }, toDate: { $gte: today } }),
    Task.countDocuments({ status: 'pending' }),
  ])

  return { totalEmployees, presentToday, onLeave, pendingTasks }
}

module.exports = { getSummary, getDashboardStats }