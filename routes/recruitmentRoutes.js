const express = require('express')
const router = express.Router()
const protect = require('../middleware/auth')

const {
    createApplication, readApplications, updateApplication, deleteApplication,
    createInterview, readInterviews, deleteInterview,
    createVacancy, readVacancies, updateVacancy, deleteVacancy
} = require('../controllers/RecruitmentController')

router.post('/applications', protect, createApplication)
router.get('/applications', protect, readApplications)
router.put('/applications/:id', protect, updateApplication)
router.delete('/applications/:id', protect, deleteApplication)

router.post('/interviews', protect, createInterview)
router.get('/interviews', protect, readInterviews)
router.delete('/interviews/:id', protect, deleteInterview)

router.post('/vacancies', protect, createVacancy)
router.get('/vacancies', protect, readVacancies)
router.put('/vacancies/:id', protect, updateVacancy)
router.delete('/vacancies/:id', protect, deleteVacancy)

module.exports = router