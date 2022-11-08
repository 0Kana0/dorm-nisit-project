const Dorm = require('../models/Dorm')

exports.listDorm = async(req,res)=>{
	try {
    const dorm = await Dorm.find({}).exec()
    res.send(dorm)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.createDorm = async(req,res)=>{
	try {
    const { name, dormType, dormFloor, dormRoom, dormImg } = req.body
    const dorm = await new Dorm({
      name, dormType, dormFloor, dormRoom, dormImg
    }).save()
    res.send(dorm)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.readDorm = async(req,res)=>{
	try {
    const id = req.params.id
    console.log(id)
    const dorm = await Dorm.findOne({_id:id})
    res.send(dorm)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.updateDorm = async(req,res)=>{
	try {
    const id = req.params.id
    const { name, dormType, dormFloor, dormRoom, dormImg } = req.body
    const dorm = await Dorm.findOneAndUpdate({_id:id},req.body)
    res.send(dorm)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.removeDorm = async(req,res)=>{
	try {
    const id = req.params.id
    const { name } = req.body
    const dorm = await Dorm.findOneAndDelete({_id:id})
    res.send(dorm)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

