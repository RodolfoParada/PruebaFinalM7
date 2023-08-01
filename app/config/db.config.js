// importacion de la libreria
const Sequelize = require("sequelize")

// conexion a base de datos
const conexion = new Sequelize("bootcamp", "postgres", "Vuelamarte123.", {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})


//exportación del archivo
module.exports = conexion