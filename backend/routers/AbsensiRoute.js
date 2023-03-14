const express = require('express')
const router = express.Router()
const {getAbsensi, createAbsensi} = require('../controllers/Absensi')
const {VerifyUser} = require('../middleware/AuthUser')


router.get('/absensi',VerifyUser,getAbsensi)
router.post('/absensi',VerifyUser,createAbsensi)



module.exports = router;