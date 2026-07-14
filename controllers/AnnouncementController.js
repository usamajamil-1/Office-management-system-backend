const Announcement = require('../models/Announcement')

const createAnnouncement = async (req, res) => {
    try {
        const { title, message, date, type } = req.body

        const announcement = await Announcement.create({
            title, message, date, type
        })

        res.status(201).json({
            message: 'announcement ban gia',
            announcement
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const readAnnouncement = async (req, res) => {
    try {

        const announcement = await Announcement.find().sort({ createdAt: -1 })

        res.status(200).json({
            message: 'announcement read ho gia',
            announcement
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const deleteAnnouncement = async (req, res) => {
    try {
        const { id } = req.params

        const announcement = await Announcement.findByIdAndDelete(id)

        res.status(200).json({
            message: 'announcement delete ho gaya!',
            announcement
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const updateAnnouncement = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        const announcement = await Announcement.findByIdAndUpdate(id, data, { new: true })

        res.status(200).json({
            message: 'announcement update ho gaya!',
            announcement
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = { createAnnouncement, readAnnouncement, deleteAnnouncement, updateAnnouncement }