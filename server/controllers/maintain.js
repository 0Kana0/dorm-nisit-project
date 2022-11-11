const Maintain = require('../models/Maintain')

exports.createMaintain = async (req,res) => {
  try {
    const { room, description } = req.body
    const maintain = new Maintain({
      user:req.user.id,
      room,
      description
    })
    await maintain.save()
    res.send('Completed!')
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.listMaintain = async (req,res) => {
  try {
    const completed = req.query.completed
    let maintain
    if (completed) {
      maintain = Maintain.find({completed:completed}).exec()
    } else {
      maintain = Maintain.find({}).exec()
    }
    res.send(maintain)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.updateMaintain = async (req,res) => {
  try {
    const { id } = req.params
    const { completed } = req.body
    const maintain = Maintain.findByIdAndUpdate({_id:id},{completed:completed})
    res.send(maintain)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}