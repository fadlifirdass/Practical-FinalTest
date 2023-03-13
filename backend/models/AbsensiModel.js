const {Sequelize} = require("sequelize")
const db = require('../config/database')
const Users = require('./UserModel')


const {DataTypes} = Sequelize;

const Absensi = db.define('absensi',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate : {
            notEmpty:true
        }
    },
    jam_masuk:{
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            notEmpty:true
        }
    },
    jam_keluar:{
        type: DataTypes.STRING,
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

Users.hasMany(Absensi)
Absensi.belongsTo(Users, {foreignKey: 'userId'})

module.exports = Absensi;

// (async()=>{
//     db.sync()
// })()