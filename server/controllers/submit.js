const Submit = require('../models/Submit')

exports.createSubmit = async(req,res)=>{
	try {
    const { dormroom, user } = req.body
    const submit = await new Submit({
      dormroom, user
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
		const submit = await Submit.find({dormroom:id})
		.populate('user')
    res.send(submit)
  } catch (err) {
    console.log(err)
    res.status(500).send('listSubmit Error!')
  }
}