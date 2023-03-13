const express = require('express')
const {Login, Logout, userLogin} = require('../controllers/Auth')
const router = express.Router()


router.get('/userlogin',userLogin)
router.post('/login',Login)
router.delete('/logout',Logout)


module.exports = router;