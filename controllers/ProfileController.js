const Employee = require('../modules/employees/employee.model')
const bcrypt = require('bcryptjs')

// Apna profile dekhna
const getProfile = async (req, res) => {
    try {
        const employee = await Employee.findById(req.user.id).select('-password')

        if (!employee) {
            return res.status(404).json({ message: 'Employee nahi mila' })
        }

        res.status(200).json({
            message: 'profile mil gaya',
            employee
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

// Apna profile update karna (password ke ilawa)
const updateProfile = async (req, res) => {
    try {
        const { name, email, phone, department, address } = req.body

        const employee = await Employee.findByIdAndUpdate(
            req.user.id,
            { name, email, phone, department, address },
            { new: true }
        ).select('-password')

        res.status(200).json({
            message: 'profile update ho gaya!',
            employee
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

// Password change karna
const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body

        const employee = await Employee.findById(req.user.id)

        if (!employee) {
            return res.status(404).json({ message: 'Employee nahi mila' })
        }

        const isMatch = await bcrypt.compare(currentPassword, employee.password)

        if (!isMatch) {
            return res.status(400).json({ message: 'Current password galat hai!' })
        }

        employee.password = await bcrypt.hash(newPassword, 10)
        await employee.save()

        res.status(200).json({ message: 'Password update ho gaya!' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = { getProfile, updateProfile, changePassword }