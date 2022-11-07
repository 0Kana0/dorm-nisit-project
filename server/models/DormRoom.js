const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const DormRoomSchema = new mongoose.Schema({
	dorm:{
		type: ObjectId,
		ref: "dorm",
	},
	roomID:{
    type:String,
  },
  floor:{
    type:String,
  },
	room:{
    type:String,
  },
	roomtype:{
    type:String,
  },
	price:{
		type:Number,
	},
	images:{
		type:Array,
	},
},{timestamps: true});

module.exports = DormRoom = mongoose.model('dormroom', DormRoomSchema)