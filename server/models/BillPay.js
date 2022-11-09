const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const BillPaySchema = new mongoose.Schema({
  bill:{
    type:ObjectId,
    ref:"bill",
  },
  user:{
    type:ObjectId,
    ref:"user"
  }
},{timestamps: true});

module.exports = BillPay = mongoose.model('bill_pay', BillPaySchema)