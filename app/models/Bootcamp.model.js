// importacion de libreria sequelize
const Sequelize = require("sequelize")

// importación del archibo db.config.js
const conexion = require("./../config/db.config")


// modelo de Bootcamp
const Bootcamp = conexion.define("bootcamps", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    cue: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 10,
            max: 20
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
})



//exportación del archivo
module.exports = Bootcamp