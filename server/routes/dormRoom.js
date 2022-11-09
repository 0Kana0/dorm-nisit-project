const express = require('express')
const router = express.Router()

// controllers
const { createDormRoom, listDormRoom, listDormRoomID, editDormRoomID , deleteDormRoomID, editRoomState, editRoomStateTrue } = require('../controllers/dormRoom')
 
// middleware
const { auth, adminCheck } = require('../middleware/auth')

//Endpoint http://localhost:5000/api/dormroom
router.post('/dormroom', auth, adminCheck, createDormRoom)

router.get('/dormroom/:id',auth, listDormRoom)

router.get('/dormroom/detail/:id',auth, listDormRoomID)

router.put('/dormroom/roomState/:id', editRoomState)
router.put('/dormroom/roomStateTrue/:id', editRoomStateTrue)

router.put('/dormroom/edit/:id',auth, adminCheck, editDormRoomID)

router.delete('/dormroom/delete/:id',auth, adminCheck, deleteDormRoomID)


module.exports = router