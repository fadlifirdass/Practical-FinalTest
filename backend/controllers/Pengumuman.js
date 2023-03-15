const Pengumuman = require('../models/PengumumanModel')


const getPengumuman = async (req,res) => {
    try {
        const response = await Pengumuman.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const createPengumuman = async (req, res) => {
    const {subject, description} = req.body
    try {
        await Pengumuman.create({
          subject : subject,
          description : description
        })
        res.status(201).json({msg: "Announcement Created !"})
    } catch (error) {
     res.status(400).json({msg: error.message})    
    }
 }

 const updatePengumuman = async (req,res) => {
    try {
        const pengumuman = await Pengumuman.findOne({
            where:{
                uuid: req.params.id
            }
        })
        if(!pengumuman) return res.status(404).json({msg: "Data tidak ditemukan!"})
        const {subject, description} = req.body
        if(req.role === "admin"){
            await Pengumuman.update({subject, description},{
                where :{
                    id: pengumuman.id
                }
            })
        }
        res.status(200).json({msg : "Pengumuman updated !"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
 }

 const getPengumumanById = async(req,res) => {
    try {
        const response = await Pengumuman.findOne({
            attributes: ['uuid','subject','description'],
            where: {
                uuid: req.params.id
            }
        })
        res.json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}


module.exports = {getPengumuman, createPengumuman, updatePengumuman, getPengumumanById}