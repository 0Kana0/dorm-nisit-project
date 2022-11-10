const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const UtilitySchema = new mongoose.Schema({
  room:{
    type:ObjectId,
    ref:"dorm",
  },
  issueDate:{
    type:Date
  },
  dueDate: {
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

module.exports = Utility = mongoose.model('utility', UtilitySchema)