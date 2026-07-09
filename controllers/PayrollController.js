const Payroll = require('../models/Payroll')

const createPayroll = async (req, res) => {
    try {
        const { name, department, basicSalary, deduction, status } = req.body

        const payroll = await Payroll.create({
            name, department, basicSalary, deduction, status
        })

        res.status(201).json({
            message: 'payroll ban gia',
            payroll
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const readPayroll = async (req, res) => {
    try {
        const payroll = await Payroll.find()

        res.status(200).json({
            message: 'payroll read ho gia',
            payroll
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const deletePayroll = async (req, res) => {
    try {
        const { id } = req.params

        const payroll = await Payroll.findByIdAndDelete(id)

        res.status(200).json({
            message: 'payroll delete ho gaya!',
            payroll
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const updatePayroll = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        // netSalary recalculate karne ke liye pehle document nikalo aur save karo
        // taake pre('save') hook chal jaye
        const payroll = await Payroll.findById(id)
        if (!payroll) {
            return res.status(404).json({ message: 'payroll not found' })
        }

        Object.assign(payroll, data)
        await payroll.save()

        res.status(200).json({
            message: 'payroll update ho gaya!',
            payroll
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = { createPayroll, readPayroll, deletePayroll, updatePayroll }