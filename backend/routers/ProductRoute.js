const express = require('express')
const router = express.Router()
const getProduct= require('../controllers/Product')


router.get('/products',getProduct)

module.exports = router;