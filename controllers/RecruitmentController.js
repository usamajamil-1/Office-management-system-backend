const JobApplication = require('../models/JobApplication')
const Interview = require('../models/Interview')
const Vacancy = require('../models/Vacancy')

// ---- Job Applications ----
const createApplication = async (req, res) => {
    try {
        const { name, role, status } = req.body
        const application = await JobApplication.create({ name, role, status })
        res.status(201).json({ message: 'application ban gia', application })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const readApplications = async (req, res) => {
    try {
        const applications = await JobApplication.find()
        res.status(200).json({ message: 'applications read ho gaen', applications })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const updateApplication = async (req, res) => {
    try {
        const { id } = req.params
        const application = await JobApplication.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ message: 'application update ho gaya!', application })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const deleteApplication = async (req, res) => {
    try {
        const { id } = req.params
        const application = await JobApplication.findByIdAndDelete(id)
        res.status(200).json({ message: 'application delete ho gaya!', application })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

// ---- Interviews ----
const createInterview = async (req, res) => {
    try {
        const { application, time } = req.body
        const interview = await Interview.create({ application, time })
        res.status(201).json({ message: 'interview schedule ho gaya', interview })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const readInterviews = async (req, res) => {
    try {
        const interviews = await Interview.find().populate('application', 'name role')
        res.status(200).json({ message: 'interviews read ho gaen', interviews })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

// ---- Vacancies ----
const createVacancy = async (req, res) => {
    try {
        const { title, department, type, openings } = req.body
        const vacancy = await Vacancy.create({ title, department, type, openings })
        res.status(201).json({ message: 'vacancy ban gai', vacancy })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

// ---- Vacancy update/delete ----
const updateVacancy = async (req, res) => {
    try {
        const { id } = req.params
        const vacancy = await Vacancy.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ message: 'vacancy update ho gai!', vacancy })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const deleteVacancy = async (req, res) => {
    try {
        const { id } = req.params
        const vacancy = await Vacancy.findByIdAndDelete(id)
        res.status(200).json({ message: 'vacancy delete ho gai!', vacancy })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

// ---- Interview delete ----
const deleteInterview = async (req, res) => {
    try {
        const { id } = req.params
        const interview = await Interview.findByIdAndDelete(id)
        res.status(200).json({ message: 'interview delete ho gaya!', interview })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const readVacancies = async (req, res) => {
    try {
        const vacancies = await Vacancy.find()
        res.status(200).json({ message: 'vacancies read ho gaen', vacancies })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = {
    createApplication, readApplications, updateApplication, deleteApplication,
    createInterview, readInterviews, deleteInterview,
    createVacancy, readVacancies, updateVacancy, deleteVacancy
}