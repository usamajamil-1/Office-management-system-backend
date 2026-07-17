const Announcement = require('./announcement.model')

const createAnnouncement = async (data) => {
  const { title, message, date, type } = data

  const announcement = await Announcement.create({ title, message, date, type })

  return announcement
}

const readAnnouncement = async () => {
  const announcement = await Announcement.find().sort({ createdAt: -1 })

  return announcement
}

const deleteAnnouncement = async (id) => {
  const announcement = await Announcement.findByIdAndDelete(id)

  return announcement
}

const updateAnnouncement = async (id, data) => {
  const announcement = await Announcement.findByIdAndUpdate(id, data, { new: true })

  return announcement
}

module.exports = { createAnnouncement, readAnnouncement, deleteAnnouncement, updateAnnouncement }