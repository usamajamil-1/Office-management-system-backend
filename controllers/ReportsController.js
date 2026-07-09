const Employee = require('../models/Employee')
const Task = require('../models/Task')
const Expense = require('../models/Expense')
const Inventory = require('../models/Inventory')
const Leave = require('../models/Leave')
const Attendance = require('../models/Attendance')

const getSummary = async (req, res) => {
    try {
        const [totalEmployees, totalTasks, totalExpenses, totalLeaves, totalInventory] = await Promise.all([
            Employee.countDocuments(),
            Task.countDocuments(),
            Expense.countDocuments(),
            Leave.countDocuments(),
            Inventory.countDocuments(),
        ])

        res.status(200).json({
            message: 'summary mil gaya',
            summary: {
                totalEmployees,
                totalTasks,
                totalExpenses,
                totalLeaves,
                totalInventory,
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

// Naya function — Dashboard ke liye
const getDashboardStats = async (req, res) => {
    try {
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const [totalEmployees, presentToday, onLeave, pendingTasks] = await Promise.all([
            Employee.countDocuments(),
            Attendance.countDocuments({ date: today, status: 'Present' }),
            Leave.countDocuments({ status: 'approved', fromDate: { $lte: today }, toDate: { $gte: today } }),
            Task.countDocuments({ status: 'pending' }),
        ])

        res.status(200).json({
            message: 'dashboard stats mil gaye',
            stats: { totalEmployees, presentToday, onLeave, pendingTasks }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = { getSummary, getDashboardStats }