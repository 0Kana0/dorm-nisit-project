const express = require('express')
const router = express.Router()

// Controller
const { listBills, listBillDormRoom } = require('../controllers/bill')

// Middleware

const { auth, adminCheck } = require('../middleware/auth')

// Endpoint
router.get('/bill', auth, listBills)
router.get('/bill/:dormId/:roomId',auth, adminCheck, listBillDormRoom)

module.exports = router

