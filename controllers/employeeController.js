const Employee = require("../models/Employee");
const bcrypt = require("bcryptjs");

const createEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      department,
      phone,
      salary,
      joiningDate,
      address,
      cnic,
    } = req.body;

    // Check existing employee
    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create employee
    const employee = await Employee.create({
      name,
      email,
      password: hashedPassword,
      role,
      department,
      phone,
      salary,
      joiningDate,
      address,
      cnic,
    });

    res.status(201).json({
      message: "Employee created successfully",
      employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const readEmployee = async (req, res) => {
  try {
    // Password response me mat bhejo
    const employee = await Employee.find().select("-password");

    res.status(200).json({
      message: "Employee fetched successfully",
      employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body };

    // Agar password update ho raha hai to hash karo
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const employee = await Employee.findByIdAndUpdate(id, data, {
      new: true,
    }).select("-password");

    res.status(200).json({
      message: "Employee updated successfully",
      employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByIdAndDelete(id);

    res.status(200).json({
      message: "Employee deleted successfully",
      employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createEmployee,
  readEmployee,
  updateEmployee,
  deleteEmployee,
};