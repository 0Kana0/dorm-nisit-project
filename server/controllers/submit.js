const Submit = require('../models/Submit')

exports.createSubmit = async(req,res)=>{
	try {
    const { dorm, dormroom, user } = req.body
    const submit = await new Submit({
      dorm, dormroom, user
    }).save()
    res.send(submit)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.listSubmit = async(req,res)=>{
	try {
		const id = req.params.id
    console.log(id)
		const submit = await Submit.find({dormroom:id})
		.populate('user')
    res.send(submit)
  } catch (err) {
    console.log(err)
    res.status(500).send('listSubmit Error!')
  }
}

exports.readSubmit = async(req,res)=>{
	try {
		const id = req.params.id
		const submit = await Submit.findOne({user:id})
    .populate('dormroom').populate('dorm')
    res.send(submit)
  } catch (err) {
    console.log(err)
    res.status(500).send('readSubmit Error!')
  }
}

exports.deleteSubmit = async(req,res)=>{
	try {
		const id = req.params.id
		const submit = await Submit.findOneAndDelete({user:id})
    res.send(submit)
  } catch (err) {
    console.log(err)
    res.status(500).send('readSubmit Error!')
  }
}