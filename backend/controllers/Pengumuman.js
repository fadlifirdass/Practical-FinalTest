const Pengumuman = require('../models/PengumumanModel')


const getPengumuman = async (req,res) => {
    try {
        const response = await Pengumuman.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}


module.exports = {getPengumuman}