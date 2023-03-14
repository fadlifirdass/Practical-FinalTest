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


const createAbsensi = async (req,res) => {
    const {jam_masuk, jam_keluar} = req.body
    try {
        await Absensi.create({
            jam_masuk: jam_masuk,
            jam_keluar: jam_keluar,
            userId: req.userId
        })
        res.status(201).json({msg: `anda telah masuk pada jam ${jam_masuk}`})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {getAbsensi, createAbsensi};