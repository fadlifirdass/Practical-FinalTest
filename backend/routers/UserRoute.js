const express = require('express')
const router = express.Router()
const {getUser, getUserById, createUser, updateUser, deleteUser}= require('../controllers/Users')
const {VerifyUser, AdminOnly} = require('../middleware/AuthUser')

router.get('/users',VerifyUser, AdminOnly,getUser)
router.get('/users/:id',VerifyUser, AdminOnly,getUserById)
router.post('/users',VerifyUser, AdminOnly,createUser)
router.patch('/users/:id',VerifyUser, AdminOnly,updateUser)
router.delete('/users/:id',VerifyUser, AdminOnly,deleteUser)

module.exports = router;