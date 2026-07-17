const announcementSchema = require('./announcement.dto')
const announcementService = require('./announcement.service')

const createAnnouncement = async (req, res) => {
  try {
    const { error } = announcementSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const announcement = await announcementService.createAnnouncement(req.body)

    res.status(201).json({ message: 'announcement ban gia', announcement })
  } catch (error) {
    res.status(500).json({ message: error.message || 'server error' })
  }
}

const readAnnouncement = async (req, res) => {
  try {
    const announcement = await announcementService.readAnnouncement()

    res.status(200).json({ message: 'announcement read ho gia', announcement })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params

    const announcement = await announcementService.deleteAnnouncement(id)

    res.status(200).json({ message: 'announcement delete ho gaya!', announcement })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params

    const announcement = await announcementService.updateAnnouncement(id, req.body)

    res.status(200).json({ message: 'announcement update ho gaya!', announcement })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

module.exports = { createAnnouncement, readAnnouncement, deleteAnnouncement, updateAnnouncement }