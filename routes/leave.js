const express = require('express')
const router = express.Router()
const protect = require('../middleware/auth')

const {createLeave,readLeave,deleteLeave,updateLeave} = require('../controllers/leaveController')
router.post('/',protect,createLeave)
router.get('/', protect, readLeave)
router.delete('/:id', protect, deleteLeave)
router.put('/:id', protect, updateLeave)

module.exports = router