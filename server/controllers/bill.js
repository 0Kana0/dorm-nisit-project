const Bill = require('../models/Bill')
const BillPay = require('../models/BillPay')
const Submit = require('../models/Submit')
const { DateTime } = require('luxon')

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

exports.listTenantDormRoom = async (req,res) => {
  try {
    const { dormId, roomId, billId } = req.params
    const sm = await Submit.find({dormroom:roomId}).populate('user').populate('dormroom').exec()
    const bill = await Bill.findOne({_id:billId}).exec()
    const billPay = await BillPay.find({bill:billId}).exec()

    const mapped = sm.map((item,index)=>{
      item = {...bill.toObject(), ...item.toObject()}
      console.log(bill.toObject()._id)
      console.log(billPay)
      const found = billPay.find((b)=>(b.user._id.toString() === item.user._id.toString()))
      fine = 0
      const dueDate = DateTime.fromJSDate(item.issueDate).plus({months:1})
      const currentDate = DateTime.now()
      if (currentDate > dueDate) {
        fine += Math.floor(currentDate.diff(dueDate,'days').as('days')) * 20
      }
      let paid
      if (found) {
        paid = true
        fine = 0
      } else {
        paid = false
      }
      item.fine = fine
      item.dueDate = dueDate.toJSDate()
      item.paid = paid
      return item
    })

    res.send(mapped)
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