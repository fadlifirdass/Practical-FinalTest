const express = require('express')
const router = express.Router()
const {getAbsensi, createAbsensi, getAbsensiById} = require('../controllers/Absensi')
const {VerifyUser} = require('../middleware/AuthUser')


router.get('/absensi',VerifyUser,getAbsensi)
router.get('/absensi/:id',VerifyUser,getAbsensiById)
router.post('/absensi',VerifyUser,createAbsensi)



module.exports = router;