const Attendance = require('./attendance.model')

const markAttendance = async (data) => {
  const { employee, status } = data

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const existing = await Attendance.findOne({ employee, date: today })

  if (existing) {
    throw new Error('Aaj ki attendance pehle se mark ho chuki hai!')
  }

  const attendance = await Attendance.create({ employee, date: today, status })

  return attendance
}

const readTodayAttendance = async () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const attendance = await Attendance.find({ date: today }).populate('employee', 'name department')

  return attendance
}

const readAllAttendance = async () => {
  const attendance = await Attendance.find()
    .sort({ date: -1 })
    .populate('employee', 'name department')

  return attendance
}

module.exports = { markAttendance, readTodayAttendance, readAllAttendance }