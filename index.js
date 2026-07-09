const express = require('express')
const mongoose = require ('mongoose')
require('dotenv').config()

const app = express()


const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'authorization']
}))

app.use(express.json()) 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err.message));





const authRoutes = require('./routes/auth')
app.use('/api/auth', authRoutes)

const employeeRoutes = require('./routes/employee')
app.use('/api/employees', employeeRoutes) 

const leaveRoutes = require('./routes/leave')
app.use('/api/leave',leaveRoutes)

const taskRoutes = require('./routes/task')
app.use('/api/task',taskRoutes)

app.use('/api/expense', require('./routes/expenseRoutes'))

app.use('/api/inventory', require('./routes/inventoryRoutes'))

app.use('/api/payroll', require('./routes/payrollRoutes'))

app.use('/api/profile', require('./routes/profileRoutes'))

app.use('/api/recruitment', require('./routes/recruitmentRoutes'))

app.use('/api/reports', require('./routes/reportsRoutes'))

app.use('/api/attendance', require('./routes/attendanceRoutes'))


app.listen(process.env.PORT,()=>{
    console.log(`Server chal raha hai port ${process.env.PORT} par!`)
})