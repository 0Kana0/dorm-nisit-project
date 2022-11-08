const mongoose = require('mongoose')

const DormSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  dormType:{
    type:String,
  },
  dormFloor:{
    type:String,
  },
  dormRoom:{
    type:String,
  },
  dormImg:{
    type:String,
  },
},{timestamps: true});

module.exports = Dorm = mongoose.model('dorm', DormSchema)