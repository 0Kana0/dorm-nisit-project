const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const SubmitSchema = new mongoose.Schema({
	dormroom:{
		type: ObjectId,
		ref: "dormroom",
	},
	user:{
		type: ObjectId,
		ref: "user",
	},
},{timestamps: true})

module.exports = Submit = mongoose.model('submit', SubmitSchema)