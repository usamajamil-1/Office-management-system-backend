const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const cors = require('cors')
const connectDB = require('./config/db')

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://office-management-system-kappa.vercel.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'authorization']
}))

app.use(express.json())

connectDB()

app.get('/', (req, res) => {
  res.send('Backend is running')
})

const authRoutes = require('./routes/auth')
app.use('/api/auth', authRoutes)

const employeeRoutes = require('./modules/employees/employee.routes')
app.use('/api/employees', employeeRoutes)

const leaveRoutes = require('./modules/leave/leave.routes')
app.use('/api/leave', leaveRoutes)

const taskRoutes = require('./modules/task/task.routes')
app.use('/api/task', taskRoutes)


const expenseRoutes = require('./modules/expense/expense.routes')
app.use('/api/expense', expenseRoutes)


const inventoryRoutes = require('./modules/inventory/inventory.routes')
app.use('/api/inventory', inventoryRoutes)


app.use('/api/payroll', require('./routes/payrollRoutes'))
app.use('/api/profile', require('./routes/profileRoutes'))
app.use('/api/recruitment', require('./routes/recruitmentRoutes'))
app.use('/api/reports', require('./routes/reportsRoutes'))

const attendanceRoutes = require('./modules/attendance/attendance.routes')
app.use('/api/attendance', attendanceRoutes)

app.use('/api/announcement', require('./routes/announcementRoutes'))

app.listen(process.env.PORT, () => {
    console.log(`Server chal raha hai port ${process.env.PORT} par!`)
})