const express = require('express')
const router = express.Router()
const {VerifyUser} = require('../middleware/AuthUser')
const {getPengumuman} = require('../controllers/Pengumuman')

router.get('/pengumuman',VerifyUser,getPengumuman)


module.exports = router;