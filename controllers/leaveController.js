const Leave = require('../models/Leave')

const createLeave = async (req,res)=>{
        try{
           const {name,leaveType,fromDate,toDate,status} = req.body

           const leave = await Leave.create({
            name,leaveType,fromDate,toDate,status
           })

           res.status(201).json({
            message: 'leave ban gia',
            leave
           })
        } catch (error){
             console.log(error)
             res.status(500).json({message:'server error'})
        }
}

const readLeave = async (req,res)=>{
        try{

           const leave = await Leave.find()

           res.status(200).json({
            message: 'leave read ho gia',
            leave
           })
        } catch (error){
             console.log(error)
             res.status(500).json({message:'server error'})
        }
}


const deleteLeave = async (req,res)=>{
    try{
        const {id} = req.params
          
        const leave = await Leave.findByIdAndDelete(id)

         res.status(200).json({           
            message: 'leave delete ho gaya!',
            leave
        })
    } catch(error){
        console.log(error)
        res.status(500).json({message:'server error'})
    }
}

const updateLeave = async (req,res)=>{
    try{
        const {id} = req.params
        const data = req.body
          
        const leave = await Leave.findByIdAndUpdate(id,data,{new:true} )

         res.status(200).json({           
            message: 'leave update ho gaya!',
            leave
        })
    } catch(error){
        console.log(error)
        res.status(500).json({message:'server error'})
    }
}

module.exports = { createLeave , readLeave ,  deleteLeave, updateLeave}