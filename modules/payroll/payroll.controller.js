const payrollSchema = require('./payroll.dto')
const payrollService = require('./payroll.service')

const createPayroll = async (req, res) => {
  try {
    const { error } = payrollSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const payroll = await payrollService.createPayroll(req.body)

    res.status(201).json({ message: 'payroll ban gia', payroll })
  } catch (error) {
    res.status(500).json({ message: error.message || 'server error' })
  }
}

const readPayroll = async (req, res) => {
  try {
    const payroll = await payrollService.readPayroll()

    res.status(200).json({ message: 'payroll read ho gia', payroll })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const deletePayroll = async (req, res) => {
  try {
    const { id } = req.params

    const payroll = await payrollService.deletePayroll(id)

    res.status(200).json({ message: 'payroll delete ho gaya!', payroll })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const updatePayroll = async (req, res) => {
  try {
    const { id } = req.params

    const payroll = await payrollService.updatePayroll(id, req.body)

    res.status(200).json({ message: 'payroll update ho gaya!', payroll })
  } catch (error) {
    if (error.message === 'payroll not found') {
      return res.status(404).json({ message: error.message })
    }
    res.status(500).json({ message: 'server error' })
  }
}

module.exports = { createPayroll, readPayroll, deletePayroll, updatePayroll }