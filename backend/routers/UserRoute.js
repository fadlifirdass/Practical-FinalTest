const express = require('express')
const router = express.Router()
const {getUser, getUserById, createUser}= require('../controllers/Users')

router.get('/users',getUser)
router.get('/users/:id',getUserById)
router.post('/users',createUser)

module.exports = router;