const { updateProfileSchema, changePasswordSchema } = require('./profile.dto')
const profileService = require('./profile.service')

const getProfile = async (req, res) => {
  try {
    const employee = await profileService.getProfile(req.user.id)

    res.status(200).json({ message: 'profile mil gaya', employee })
  } catch (error) {
    if (error.message === 'Employee nahi mila') {
      return res.status(404).json({ message: error.message })
    }
    res.status(500).json({ message: 'server error' })
  }
}

const updateProfile = async (req, res) => {
  try {
    const { error } = updateProfileSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const employee = await profileService.updateProfile(req.user.id, req.body)

    res.status(200).json({ message: 'profile update ho gaya!', employee })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

const changePassword = async (req, res) => {
  try {
    const { error } = changePasswordSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const { currentPassword, newPassword } = req.body

    await profileService.changePassword(req.user.id, currentPassword, newPassword)

    res.status(200).json({ message: 'Password update ho gaya!' })
  } catch (error) {
    if (error.message === 'Employee nahi mila') {
      return res.status(404).json({ message: error.message })
    }
    if (error.message === 'Current password galat hai!') {
      return res.status(400).json({ message: error.message })
    }
    res.status(500).json({ message: 'server error' })
  }
}

module.exports = { getProfile, updateProfile, changePassword }