const Employee = require('../models/Employee')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
      return res.status(400).json({
        message: "Email pehle se registered hai!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const employee = await Employee.create({
      name,
      email,
      password: hashedPassword,
      role,
      department: "Admin",
      phone: "00000000000",
      salary: 0,
      joiningDate: new Date(),
      address: "Admin",
      cnic: "00000-0000000-0",
    });

    res.status(201).json({
      message: "Account ban gaya!",
      employee,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error!",
    });
  }
};

const login = async (req, res) => {
   try {
      const { email, password } = req.body

      // Employee find karo
      const employee = await Employee.findOne({ email })

      if (!employee) {
         return res.status(404).json({
            message: 'Email registered nahi hai!'
         })
      }

      // Password verify karo
      const isMatch = await bcrypt.compare(password, employee.password)

      if (!isMatch) {
         return res.status(400).json({
            message: 'Password galat hai!'
         })
      }

      // JWT Token
      const token = jwt.sign(
         {
            id: employee._id,
            role: employee.role
         },
         process.env.JWT_SECRET,
         {
            expiresIn: '7d'
         }
      )

      // Password response me mat bhejo
      const employeeWithoutPassword = await Employee.findById(employee._id).select('-password')

      res.status(200).json({
         message: 'Login ho gaya!',
         token,
         user: employeeWithoutPassword
      })

   } catch (error) {
      console.log(error)
      res.status(500).json({
         message: 'Server error!'
      })
   }
}

module.exports = { login , signup}