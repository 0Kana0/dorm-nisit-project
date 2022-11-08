const express = require('express')
const router = express.Router()

//controller
const { listUsers, readUsers, updateUsers, removeUsers, updateUserBookTrue } = require('../controllers/user')

// middleware
const { auth, adminCheck } = require('../middleware/auth')

//Endpoint http://localhost:5000/api/users
//Method   GET
//Access   Private
router.get('/users', auth, adminCheck, listUsers)

//Endpoint http://localhost:5000/api/users/:id
//Method   GET
//Access   Private
router.get('/users/:id',auth, readUsers)

//Endpoint http://localhost:5000/api/users/:id
//Method   PUT
//Access   Private
router.put('/users/:id',auth, updateUsers)
router.put('/users/book/:id', updateUserBookTrue)

//Endpoint http://localhost:5000/api/users/:id
//Method   DELETE
//Access   Private
router.delete('/users/:id', removeUsers)

module.exports = router