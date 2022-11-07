const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstname:{
    type:String,
  },
  lastname:{
    type:String,
  },
	username:{
    type:String,
  },
  email:{
    type:String,
  },
  password:{
    type:String,
  },
  address:{
    type:String,
  },
  phone:{
    type:String,
  },
  studentID:{
    type:String,
  },
  gender:{
    type:String,
  },
  classYear:{
    type:String,
  },
  faculty:{
    type:String,
  },
  major:{
    type:String,
  },
  identity:{
    type:String,
  },
  bookedState:{
    type:Boolean,
    default: false
  },
  role:{
    type:String,
    default: 'user'
  },
},{timestamps: true});

module.exports = User = mongoose.model('user', UserSchema)