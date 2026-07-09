const Task = require('../models/Task')

const createTask = async (req,res)=>{
        try{
           const {title,assignedTo,dueDate,status} = req.body

           const task = await Task.create({
            title,assignedTo,dueDate,status
           })

           res.status(201).json({
            message: 'task ban gia',
            task
           })
        } catch (error){
             console.log(error)
             res.status(500).json({message:'server error'})
        }
}

const readTask = async (req,res)=>{
        try{

           const task = await Task.find()

           res.status(200).json({
            message: 'task read ho gia',
            task
           })
        } catch (error){
             console.log(error)
             res.status(500).json({message:'server error'})
        }
}


const deleteTask = async (req,res)=>{
    try{
        const {id} = req.params
          
        const task = await Task.findByIdAndDelete(id)

         res.status(200).json({           
            message: 'task delete ho gaya!',
            task
        })
    } catch(error){
        console.log(error)
        res.status(500).json({message:'server error'})
    }
}

const updateTask = async (req,res)=>{
    try{
        const {id} = req.params
        const data = req.body
          
        const task = await Task.findByIdAndUpdate(id,data,{new:true} )

         res.status(200).json({           
            message: 'task update ho gaya!',
            task
        })
    } catch(error){
        console.log(error)
        res.status(500).json({message:'server error'})
    }
}

module.exports = { createTask , readTask ,  deleteTask, updateTask}