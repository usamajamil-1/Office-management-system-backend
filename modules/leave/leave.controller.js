const leaveSchema = require('./leave.dto')
const leaveService = require('./leave.service')

const createLeave = async (req, res) => {
  try {
    const { error } = leaveSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const leave = await leaveService.createLeave(req.body)

    res.status(201).json({ message: 'leave ban gia', leave })
  } catch (error) {
    res.status(500).json({ message: error.message || 'server error' })
  }
}

const readLeave = async (req, res) => {
  try {
    const leave = await leaveService.readLeave()

    res.status(200).json({ message: 'leave read ho gia', leave })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const deleteLeave = async (req, res) => {
  try {
    const { id } = req.params

    const leave = await leaveService.deleteLeave(id)

    res.status(200).json({ message: 'leave delete ho gaya!', leave })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const updateLeave = async (req, res) => {
  try {
    const { id } = req.params

    const leave = await leaveService.updateLeave(id, req.body)

    res.status(200).json({ message: 'leave update ho gaya!', leave })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

module.exports = { createLeave, readLeave, deleteLeave, updateLeave }