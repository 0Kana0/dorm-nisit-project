const mongoose = require('mongoose')

const DormSchema = new mongoose.Schema({
  name:{
    type:String,
  },
},{timestamps: true});

module.exports = Dorm = mongoose.model('dorm', DormSchema)