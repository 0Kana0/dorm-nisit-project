const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const MaintainSchema = new mongoose.Schema({
  user:{
    type:ObjectId,
    ref:'user',
  },
  room:{
    type:ObjectId,
    ref:'dormroom'
  },
  dorm:{
    type:ObjectId,
    ref:'dorm'
  },
  description:{
    type:String
  },
  completed:{
    type:Boolean,
    default:false
  }
},{timestamps:true})

module.exports = Maintain = mongoose.model('maintain',MaintainSchema)