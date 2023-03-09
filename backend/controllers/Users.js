const User = require('../models/UserModel')


const getUser = async(req,res) => {
    try {
        const response = await Product.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}



module.exports = getUser;