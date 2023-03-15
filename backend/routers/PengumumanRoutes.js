const express = require('express')
const router = express.Router()
const {VerifyUser} = require('../middleware/AuthUser')
const {getPengumuman, createPengumuman} = require('../controllers/Pengumuman')

router.get('/pengumuman',VerifyUser,getPengumuman)
router.post('/pengumuman',createPengumuman)


module.exports = router;