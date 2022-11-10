const Bill = require('../models/Bill')

exports.listBills = async (req,res) => {
  try {
    const user = req.user
    const bills = await Bill.find({user:user.id}).exec()
    console.log(bills)
    res.send(bills)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.createBill = async (req,res) => {
  try {

  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.payBill = async (req,res) => {
  try {

  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}