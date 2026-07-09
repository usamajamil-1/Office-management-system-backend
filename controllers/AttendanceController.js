const Attendance = require('../models/Attendance')

// Attendance mark karna (aaj ke din ke liye)
const markAttendance = async (req, res) => {
    try {
        const { name, status } = req.body

        // Aaj ki date (sirf date, time nahi)
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        // Check karo aaj already mark to nahi ho chuki
        const existing = await Attendance.findOne({ name, date: today })

        if (existing) {
            return res.status(400).json({ message: 'Aaj ki attendance pehle se mark ho chuki hai!' })
        }

        const attendance = await Attendance.create({ name, date: today, status })

        res.status(201).json({
            message: 'attendance mark ho gai',
            attendance
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

// Sirf aaj ki attendance dekhna
const readTodayAttendance = async (req, res) => {
    try {
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const attendance = await Attendance.find({ date: today })

        res.status(200).json({
            message: 'aaj ki attendance mil gai',
            attendance
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

// Poori history dekhna
const readAllAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find().sort({ date: -1 })

        res.status(200).json({
            message: 'attendance history mil gai',
            attendance
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = { markAttendance, readTodayAttendance, readAllAttendance }