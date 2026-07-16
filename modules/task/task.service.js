const Task = require('./task.model')

const createTask = async (data) => {
  const { title, assignedTo, dueDate, status } = data

  const task = await Task.create({ title, assignedTo, dueDate, status })

  return task
}

const readTask = async () => {
  const task = await Task.find().populate('assignedTo', 'name department')

  return task
}

const deleteTask = async (id) => {
  const task = await Task.findByIdAndDelete(id)

  return task
}

const updateTask = async (id, data) => {
  const task = await Task.findByIdAndUpdate(id, data, { new: true })

  return task
}

module.exports = { createTask, readTask, deleteTask, updateTask }