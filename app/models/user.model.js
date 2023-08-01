// importacion de libreria sequelize
const Sequelize = require("sequelize")

// importación del archibo db.config.js
const conexion = require("./../config/db.config")

const User = conexion.define("users", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
})

//exportación del archivo
module.exports = User