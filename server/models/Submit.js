const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const SubmitSchema = new mongoose.Schema({
	dorm:{
		type: ObjectId,
		ref: "dorm",
	},
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