const express = require('express')
const router = express.Router()
const protect = require('../../middleware/auth')

const { getSummary, getDashboardStats } = require('./reports.controller')

router.get('/summary', protect, getSummary)
router.get('/dashboard', protect, getDashboardStats)

module.exports = router