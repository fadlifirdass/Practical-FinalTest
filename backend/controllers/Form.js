const Product = require('../models/FormModel')
const User = require('../models/UserModel')
const {Op} = require('sequelize')

const getProduct = async(req,res) => {
    try {
        let response
        if(req.role === "admin"){
            response = await Product.findAll({
                attributes:['uuid','name','price','status'],
                include:[{
                    model : User,
                    attributes:['name','email']
                }]
            })
        }else {
            response = await Product.findAll({
                attributes:['uuid','name','price','status'],
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

const getProductById = async (req,res) => {
    try {
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        })
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan!"})
        let response
        if(req.role === "admin"){
            response = await Product.findOne({
                attributes:['uuid','name','price','status'],
                where:{
                    id: product.id
                },
                include:[{
                    model : User,
                    attributes:['name','email']
                }]
            })
        }else {
            response = await Product.findOne({
                attributes:['uuid','name','price','status'],
                where:{
                    [Op.and]:[{id: product.id},{userId: req.userId}]
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

const historyProduct = async (req,res) => {
    try {
        let response
        if(req.role === "admin"){
            response = await Product.findAll({
                attributes:['uuid','name','price','status','createdAt'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model : User,
                    attributes:['name','email']
                }]
            })
        }else {
            response = await Product.findAll({
                attributes:['uuid','name','price','status','createdAt'],
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





const createProduct = async (req,res) => {
    const {name, price, status} = req.body
    try {
        await Product.create({
            name: name,
            price: price,
            status: status,
            userId: req.userId
        })
        res.status(201).json({msg:"Product Created Successfully"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const updateProduct = async (req,res) => {
    try {
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        })
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan!"})
        const {name, price, status} = req.body
        if(req.role === "admin"){
            await Product.update({name, price, status},{
                where :{
                    id: product.id
                }
            })
        }else {
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang"})
            await Product.update({name, price, status},{
                where:{
                    [Op.and]:[{id: product.id},{userId: req.userId}]
                }
            }) 
        }
        res.status(200).json({msg : "Product updated !"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const deleteProduct = async(req,res) => {
    try {
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        })
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan!"})
        const {name, price, status} = req.body
        if(req.role === "admin"){
            await Product.destroy({
                where :{
                    id: product.id
                }
            })
        }else {
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang"})
            await Product.destroy({
                where:{
                    [Op.and]:[{id: product.id},{userId: req.userId}]
                }
            }) 
        }
        res.status(200).json({msg : "Product Deleted !"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}





module.exports = {getProduct, createProduct,getProductById, updateProduct, deleteProduct, historyProduct}