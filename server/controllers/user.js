const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require("jsonwebtoken")

exports.listUsers = async(req,res)=>{
  try{
   // Code
   const user = await User.find({}).select('-password').exec()
   res.send(user)
  }catch(err){
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.readUsers = async(req,res)=>{
	try{
	 // Code
   const id = req.params.id
	 console.log(id)
   const user = await User.findOne({_id:id})
	 .select('-password')
	 .exec()
   res.send(user)
	}catch(err){
	  console.log(err)
	  res.status(500).send('readUsers Error!')
	}
}

exports.updateUsers = async(req,res)=>{
	try{
		const id = req.params.id
		const user = await User.findByIdAndUpdate({_id:id},req.body)
	 	res.send(user)
	}catch(err){
	  console.log(err)
	  res.status(500).send('updateUsers Error!')
	}
}

exports.removeUsers = async(req,res)=>{
	try{
	 // Code
   const id = req.params.id
   const user = await User.findOneAndDelete({_id:id})
	 res.send(user)
	}catch(err){
	  console.log(err)
	  res.status(500).send('Server Error!')
	}
}

exports.updateUserBookTrue = async(req,res)=>{
	try{
		const id = req.params.id
		const user = await User.findByIdAndUpdate({_id:id},{bookedState:true})
	 	res.send(user)
	}catch(err){
	  console.log(err)
	  res.status(500).send('updateUsers Error!')
	}
}

exports.updateUserBookFalse = async(req,res)=>{
	try{
		const id = req.params.id
		const user = await User.findByIdAndUpdate({_id:id},{bookedState:false})
	 	res.send(user)
	}catch(err){
	  console.log(err)
	  res.status(500).send('updateUsers Error!')
	}
}