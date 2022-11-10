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
    const { roomId } = req.params
    const tenants = await Submit.find({dormroom:roomId}).populate('dormroom').populate('user').exec()
    const pay = await BillPay.find({room:roomId}).exec()
    const bill = await Bill.findOne({room:roomId}).exec()
    const mappedTenants = tenants.map((item,index)=>{
      if (bill !== null)
        item = {...bill.toObject(),...item.toObject()}
      let fine = 0
      let issueDate = DateTime.fromJSDate(item.issueDate)
      console.log(issueDate)
      let dueDate = DateTime.fromJSDate(item.issueDate).plus({months:1})
      let currentDate = DateTime.now()
      if (currentDate > dueDate) {
        let diff = currentDate.diff(dueDate,['days'])
        let days = diff.as('days')
        console.log('kk')
        fine += Math.floor(days) * 20
      }
      item.dueDate = dueDate.toUTC().toISO()
      console.log(item.user._id)
      const found = pay.find((bill)=>{
        return bill.user._id.toString() === item.user._id.toString()
      })
      console.log(found)
      if (found) {
        item.paid = true
        item.fine = 0
      } else {
        item.paid = false
        item.fine = fine
      }
      return item
    })
    res.send(mappedTenants)
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