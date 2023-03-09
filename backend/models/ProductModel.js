const {Sequelize} = require("sequelize")
const db = require('../config/database')
const Users = require('../models/UserModel')


const {DataTypes} = Sequelize;

const Product = db.define('product',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate : {
            notEmpty:true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            notEmpty:true,
            len : [3, 100]
        }
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
            notEmpty:true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
            notEmpty:true
        }
    }
},{
    freezeTableName : true
})

Users.hasMany(Product)
Product.belongsTo(Users, {foreignKey: 'userId'})


module.exports = Product;
