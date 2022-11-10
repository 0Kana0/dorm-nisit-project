const express = require('express')
const router = express.Router()

// controllers
const { createSubmit, listSubmit, readSubmit, deleteSubmit } = require('../controllers/submit')
 
// middleware
const { auth, adminCheck } = require('../middleware/auth')

//Endpoint http://localhost:5000/api/submit
router.post('/submit',auth, createSubmit)
router.get('/submit/:id',auth, listSubmit)
router.get('/submit/user/:id',auth, readSubmit)
router.delete('/submit/user/:id',auth, deleteSubmit)

module.exports = router