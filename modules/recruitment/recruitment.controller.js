const { applicationSchema, vacancySchema, interviewSchema } = require('./recruitment.dto')
const recruitmentService = require('./recruitment.service')

// ---- Applications ----
const createApplication = async (req, res) => {
  try {
    const { error } = applicationSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const application = await recruitmentService.createApplication(req.body)
    res.status(201).json({ message: 'application ban gia', application })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const readApplications = async (req, res) => {
  try {
    const applications = await recruitmentService.readApplications()
    res.status(200).json({ message: 'applications read ho gaen', applications })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const updateApplication = async (req, res) => {
  try {
    const { id } = req.params
    const application = await recruitmentService.updateApplication(id, req.body)
    res.status(200).json({ message: 'application update ho gaya!', application })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params
    const application = await recruitmentService.deleteApplication(id)
    res.status(200).json({ message: 'application delete ho gaya!', application })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

// ---- Interviews ----
const createInterview = async (req, res) => {
  try {
    const { error } = interviewSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const interview = await recruitmentService.createInterview(req.body)
    res.status(201).json({ message: 'interview schedule ho gaya', interview })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const readInterviews = async (req, res) => {
  try {
    const interviews = await recruitmentService.readInterviews()
    res.status(200).json({ message: 'interviews read ho gaen', interviews })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const deleteInterview = async (req, res) => {
  try {
    const { id } = req.params
    const interview = await recruitmentService.deleteInterview(id)
    res.status(200).json({ message: 'interview delete ho gaya!', interview })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

// ---- Vacancies ----
const createVacancy = async (req, res) => {
  try {
    const { error } = vacancySchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const vacancy = await recruitmentService.createVacancy(req.body)
    res.status(201).json({ message: 'vacancy ban gai', vacancy })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const readVacancies = async (req, res) => {
  try {
    const vacancies = await recruitmentService.readVacancies()
    res.status(200).json({ message: 'vacancies read ho gaen', vacancies })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const updateVacancy = async (req, res) => {
  try {
    const { id } = req.params
    const vacancy = await recruitmentService.updateVacancy(id, req.body)
    res.status(200).json({ message: 'vacancy update ho gai!', vacancy })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const deleteVacancy = async (req, res) => {
  try {
    const { id } = req.params
    const vacancy = await recruitmentService.deleteVacancy(id)
    res.status(200).json({ message: 'vacancy delete ho gai!', vacancy })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

module.exports = {
  createApplication, readApplications, updateApplication, deleteApplication,
  createInterview, readInterviews, deleteInterview,
  createVacancy, readVacancies, updateVacancy, deleteVacancy
}