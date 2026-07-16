const attendanceSchema = require('./attendance.dto')
const attendanceService = require('./attendance.service')

const markAttendance = async (req, res) => {
  try {
    const { error } = attendanceSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      })
    }

    const attendance = await attendanceService.markAttendance(req.body)

    res.status(201).json({
      message: 'attendance mark ho gai',
      attendance,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'server error',
    })
  }
}

const readTodayAttendance = async (req, res) => {
  try {
    const attendance = await attendanceService.readTodayAttendance()

    res.status(200).json({
      message: 'aaj ki attendance mil gai',
      attendance,
    })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const readAllAttendance = async (req, res) => {
  try {
    const attendance = await attendanceService.readAllAttendance()

    res.status(200).json({
      message: 'attendance history mil gai',
      attendance,
    })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

module.exports = { markAttendance, readTodayAttendance, readAllAttendance }