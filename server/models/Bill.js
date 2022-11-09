const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const BillSchema = new mongoose.Schema({
  room:{
    type:ObjectId,
    ref:"dormroom",
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
},{timestamps: true});

module.exports = Bill = mongoose.model('bill', BillSchema)