const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const BillSchema = new mongoose.Schema({
  user:{
    type:ObjectId,
    ref:"user"
  },
  room:{
    type:ObjectId,
    ref:"dorm",
  },
  issueDate:{
    type:Date
  },
  water:{
    type:Number,
  },
  electric:{
    type:Number
  },
  fine:{
    type:Number
  },
  paid:{
    type:Boolean
  },
},{timestamps: true});

module.exports = Bill = mongoose.model('bill', BillSchema)