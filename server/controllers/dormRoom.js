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
    const dormroom = await DormRoom.find()
		.populate('dorm')
    res.send(dormroom)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}





