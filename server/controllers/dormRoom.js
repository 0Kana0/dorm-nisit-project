const DormRoom = require('../models/DormRoom')

exports.createDormRoom = async(req,res)=>{
	try {
    const dormroom = await new DormRoom(req.body).save()
    res.send(dormroom)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.listDormRoom = async(req,res)=>{
	try {
    const id = req.params.id
    const dormroom = await DormRoom.find({dorm:id})
		.populate('dorm')
    res.send(dormroom)
  } catch (err) {
    console.log(err)
    res.status(500).send('listDormRoom Error!')
  }
}

exports.listDormRoomID = async(req,res)=>{
	try {
    const id = req.params.id
    const dormroom = await DormRoom.findOne({_id:id})
		.populate('dorm')
    res.send(dormroom)
  } catch (err) {
    console.log(err)
    res.status(500).send('listDormRoom Error!')
  }
}

exports.deleteDormRoomID = async(req,res)=>{
	try {
    const id = req.params.id
    const dormroom = await DormRoom.findOneAndDelete({_id:id})
		.populate('dorm')
    res.send(dormroom)
  } catch (err) {
    console.log(err)
    res.status(500).send('listDormRoom Error!')
  }
}

exports.editDormRoomID = async(req,res)=>{
	try {
    const id = req.params.id
    const { dorm, roomID, floor, room, roomtype, member, price, roomState, images } = req.body
    const dormroom = await DormRoom.findOneAndUpdate({_id:id},req.body)
		.populate('dorm')
    res.send(dormroom)
  } catch (err) {
    console.log(err)
    res.status(500).send('listDormRoom Error!')
  }
}

exports.editRoomState = async(req,res)=>{
	try {
    const id = req.params.id
    console.log(id)
    const dormroom = await DormRoom.findOneAndUpdate({_id:id},{roomState:false})
    res.send(dormroom)
  } catch (err) {
    console.log(err)
    res.status(500).send('listDormRoom Error!')
  }
}

exports.editRoomStateTrue = async(req,res)=>{
	try {
    const id = req.params.id
    console.log(id)
    const dormroom = await DormRoom.findOneAndUpdate({_id:id},{roomState:true})
    res.send(dormroom)
  } catch (err) {
    console.log(err)
    res.status(500).send('listDormRoom Error!')
  }
}