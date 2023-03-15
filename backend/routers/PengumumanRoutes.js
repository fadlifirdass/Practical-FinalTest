const express = require('express')
const router = express.Router()
const {VerifyUser} = require('../middleware/AuthUser')
const {getPengumuman, createPengumuman, updatePengumuman, getPengumumanById} = require('../controllers/Pengumuman')

router.get('/pengumuman',VerifyUser,getPengumuman)
router.get('/pengumuman/:id',VerifyUser,getPengumumanById)
router.post('/pengumuman',VerifyUser,createPengumuman)
router.patch('/pengumuman/:id',VerifyUser,updatePengumuman)


module.exports = router;