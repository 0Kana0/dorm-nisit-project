const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require("jsonwebtoken")

exports.register = async(req,res)=>{
  try{
    // Check user
    const { firstname, lastname, username, email, password, address, phone, studentID, gender, classYear, faculty, major, identity } = req.body
    var user = await User.findOne({email})
    if(user){
      return res.status(400).send('User Already exists');
    }
    const salt = await bcrypt.genSalt(10)
    user = new User({
      firstname,
      lastname,
      username,
      email,
      password,
      address, 
      phone,
      studentID,
      gender,
      classYear, 
      faculty, 
      major,
      identity,
    })
    // Encrypt
    user.password = await bcrypt.hash(password,salt);
    await user.save();
    res.send('Register Success');
  }catch(err){
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.login = async(req,res)=>{
  try {
    const { username, password } = req.body;
    var user = await User.findOneAndUpdate({username},{new:true});
    if(user){
      // Check Password
      const isMatch = await bcrypt.compare(password,user.password)
      
      if(!isMatch){
        return res.status(400).send('Password invalid!!!')
      }
      // Payload
      const payload = {
        user:{
          id: user._id,
          username: user.username,
          role: user.role,
        }
      }
      // Generate Token
      jwt.sign(payload,
              'jwtSecret',
              {expiresIn:172800},(err,token)=>{
                if(err) throw err;
                res.json({token,payload})
              })
    }else{
      return res.status(400).send('User not found!!!')
    }
  }catch(err){
    console.log(err)
    res.status(500).send('Server Error!')
  }
};

exports.currentUser = async(req,res)=>{
  try {
    // model User
    // console.log('controller',req.user)
    const user = await User.findOne({username:req.user.username})
    .select('-password').exec()
    res.send(user)
    console.log('user',user)
  } catch (err) {
      console.log(err)
      res.status(500).send('Server Error!')
  }
}

exports.listUser = async(req,res)=>{
  try{
    res.send('list get user')
  }catch(err){
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.editUser = async(req,res)=>{
  try{
    res.send('edit user')
  }catch(err){
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.deleteUser = async(req,res)=>{
  try{
    res.send('remove user')
  }catch(err){
    console.log(err)
    res.status(500).send('Server Error!')
  }
}