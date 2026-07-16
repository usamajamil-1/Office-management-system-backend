const taskSchema = require('./task.dto')
const taskService = require('./task.service')

const createTask = async (req, res) => {
  try {
    const { error } = taskSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const task = await taskService.createTask(req.body)

    res.status(201).json({ message: 'task ban gia', task })
  } catch (error) {
    res.status(500).json({ message: error.message || 'server error' })
  }
}

const readTask = async (req, res) => {
  try {
    const task = await taskService.readTask()

    res.status(200).json({ message: 'task read ho gia', task })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params

    const task = await taskService.deleteTask(id)

    res.status(200).json({ message: 'task delete ho gaya!', task })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params

    const task = await taskService.updateTask(id, req.body)

    res.status(200).json({ message: 'task update ho gaya!', task })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

module.exports = { createTask, readTask, deleteTask, updateTask }