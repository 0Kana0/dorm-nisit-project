const express = require('express')
const router = express.Router()

// controllers
const { listDorm, createDorm, readDorm, updateDorm, removeDorm } = require('../controllers/dorm')

// middleware
const { auth, adminCheck } = require('../middleware/auth')

//Endpoint http://localhost:5000/api/category
router.get('/dorm', auth, listDorm)
router.post('/dorm', auth, adminCheck, createDorm)
router.get('/dorm/:id', auth, readDorm)
router.put('/dorm/:id', auth, adminCheck, updateDorm)
router.delete('/dorm/:id', auth, adminCheck, removeDorm)

module.exports = router