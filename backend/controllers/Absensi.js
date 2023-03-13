const Absensi = require('../models/AbsensiModel')
const User = require('../models/UserModel')

const getAbsensi = async(req,res) => {
    try {
        let response
        if(req.role === "admin"){
            response = await Absensi.findAll({
                include:[{
                    model : User,
                    attributes:['name','email']
                }]
            })
        }else {
            response = await Absensi.findAll({
                where:{
                    userId: req.userId
                },
                include:[{
                    model : User,
                    attributes:['name','email']
                }]
            })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = getAbsensi;