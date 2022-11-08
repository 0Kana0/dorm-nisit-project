const express = require('express')
const router = express.Router()

// controllers
const { createSubmit, listSubmit } = require('../controllers/submit')
 
// middleware
const { auth, adminCheck } = require('../middleware/auth')

//Endpoint http://localhost:5000/api/submit
router.post('/submit',auth, createSubmit)
router.get('/submit/:id',auth, listSubmit)

module.exports = router