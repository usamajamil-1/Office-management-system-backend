const { signupSchema, loginSchema } = require('./auth.dto')
const authService = require('./auth.service')

const signup = async (req, res) => {
  try {
    const { error } = signupSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const employee = await authService.signup(req.body)

    res.status(201).json({ message: 'Account ban gaya!', employee })
  } catch (error) {
    if (error.message === 'Email pehle se registered hai!') {
      return res.status(400).json({ message: error.message })
    }
    res.status(500).json({ message: 'Server error!' })
  }
}

const login = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    const { email, password } = req.body

    const { token, user } = await authService.login(email, password)

    res.status(200).json({ message: 'Login ho gaya!', token, user })
  } catch (error) {
    if (error.message === 'Email registered nahi hai!') {
      return res.status(404).json({ message: error.message })
    }
    if (error.message === 'Password galat hai!') {
      return res.status(400).json({ message: error.message })
    }
    res.status(500).json({ message: 'Server error!' })
  }
}

module.exports = { signup, login }