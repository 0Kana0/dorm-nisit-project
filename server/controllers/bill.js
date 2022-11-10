const Bill = require('../models/Bill')

exports.listBills = async (req,res) => {
  try {
    const user = req.user
    const bills = await Bill.find({}).populate('room').exec()
    console.log(bills)
    res.send(bills)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error!')
  }
}

exports.listBillDormRoom = async (req,res) => {
  try {
    const { roomId } = req.params
    const bills = await Bill.find({room:roomId}).populate('room').exec()
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