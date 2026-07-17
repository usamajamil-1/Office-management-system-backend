const reportsService = require('./reports.service')

const getSummary = async (req, res) => {
  try {
    const summary = await reportsService.getSummary()

    res.status(200).json({ message: 'summary mil gaya', summary })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const getDashboardStats = async (req, res) => {
  try {
    const stats = await reportsService.getDashboardStats()

    res.status(200).json({ message: 'dashboard stats mil gaye', stats })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

module.exports = { getSummary, getDashboardStats }