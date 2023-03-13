const express = require('express')
const router = express.Router()
const getAbsensi = require('../controllers/Absensi')
const {VerifyUser} = require('../middleware/AuthUser')


router.get('/absensi',VerifyUser,getAbsensi)



module.exports = router;