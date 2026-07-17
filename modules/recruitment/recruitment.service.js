const JobApplication = require('./application.model')
const Vacancy = require('./vacancy.model')
const Interview = require('./interview.model')

// ---- Applications ----
const createApplication = async (data) => {
  const { name, role, status } = data
  const application = await JobApplication.create({ name, role, status })
  return application
}

const readApplications = async () => {
  const applications = await JobApplication.find()
  return applications
}

const updateApplication = async (id, data) => {
  const application = await JobApplication.findByIdAndUpdate(id, data, { new: true })
  return application
}

const deleteApplication = async (id) => {
  const application = await JobApplication.findByIdAndDelete(id)
  return application
}

// ---- Interviews ----
const createInterview = async (data) => {
  const { application, time } = data
  const interview = await Interview.create({ application, time })
  return interview
}

const readInterviews = async () => {
  const interviews = await Interview.find().populate('application', 'name role')
  return interviews
}

const deleteInterview = async (id) => {
  const interview = await Interview.findByIdAndDelete(id)
  return interview
}

// ---- Vacancies ----
const createVacancy = async (data) => {
  const { title, department, type, openings } = data
  const vacancy = await Vacancy.create({ title, department, type, openings })
  return vacancy
}

const readVacancies = async () => {
  const vacancies = await Vacancy.find()
  return vacancies
}

const updateVacancy = async (id, data) => {
  const vacancy = await Vacancy.findByIdAndUpdate(id, data, { new: true })
  return vacancy
}

const deleteVacancy = async (id) => {
  const vacancy = await Vacancy.findByIdAndDelete(id)
  return vacancy
}

module.exports = {
  createApplication, readApplications, updateApplication, deleteApplication,
  createInterview, readInterviews, deleteInterview,
  createVacancy, readVacancies, updateVacancy, deleteVacancy
}