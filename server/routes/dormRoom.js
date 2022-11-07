const express = require('express')
const router = express.Router()

// controllers
const { createDormRoom, listDormRoom } = require('../controllers/dormRoom')
 
// middleware
const { auth, adminCheck } = require('../middleware/auth')

//Endpoint http://localhost:5000/api/dormroom
router.post('/dormroom', auth, adminCheck, createDormRoom)
router.get('/dormroom', listDormRoom)

module.exports = router