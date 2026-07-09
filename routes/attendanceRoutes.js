const express = require('express')
const router = express.Router()
const protect = require('../middleware/auth')

const { markAttendance, readTodayAttendance, readAllAttendance } = require('../controllers/AttendanceController')

router.post('/', protect, markAttendance)
router.get('/today', protect, readTodayAttendance)
router.get('/', protect, readAllAttendance)

module.exports = router