const express = require('express')
const router = express.Router()
const protect = require('../../middleware/auth')

const { createAnnouncement, readAnnouncement, deleteAnnouncement, updateAnnouncement } = require('./announcement.controller')

router.post('/', protect, createAnnouncement)
router.get('/', protect, readAnnouncement)
router.delete('/:id', protect, deleteAnnouncement)
router.put('/:id', protect, updateAnnouncement)

module.exports = router