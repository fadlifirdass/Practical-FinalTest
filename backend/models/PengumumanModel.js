const db = require('../config/database')
const {Sequelize} = require('sequelize')

const {DataTypes} = Sequelize;

const Pengumuman = db.define('pengumuman',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate : {
            notEmpty:true
        }
    },
    subject:{
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            notEmpty:true
        }
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            notEmpty:true
        }
    }
},{
    freezeTableName:true
})


module.exports = Pengumuman;

