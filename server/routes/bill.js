const express = require('express')
const router = express.Router()

// Controller
const { listBills } = require('../controllers/bill')

// Middleware

const { auth, adminCheck } = require('../middleware/auth')

// Endpoint
router.get('/bill', auth, listBills)

module.exports = router

