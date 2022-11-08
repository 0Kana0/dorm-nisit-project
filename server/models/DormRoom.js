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
	member:{
		type:Number,
	},
	price:{
		type:Number,
	},
	roomState:{
		type:Boolean,
		default: true
	},
	images:{
		type:String,
	},
},{timestamps: true});

module.exports = DormRoom = mongoose.model('dormroom', DormRoomSchema)