const express = require('express')
const router = express.Router()

// controller
const { createMaintain, listMaintain, updateMaintain } = require('../controllers/maintain')

// middleware
const { auth, adminCheck } = require('../middleware/auth')

// endpoint
router.get('maintain/', auth, adminCheck, listMaintain)
router.post('maintain/create',auth, adminCheck, createMaintain)
router.put('maintain/update/:id',auth, adminCheck, updateMaintain)

module.exports = router