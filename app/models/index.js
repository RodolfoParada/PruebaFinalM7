// importacion archivo db.config.js
const conexion = require("./../config/db.config")

// referencia los modelos de base de datos "db"
const db = {
    conexion: conexion,
    bootcamp: require("./Bootcamp.model"),
    users: require("./user.model")

}
//define uno a muchos entre los modelos bootcamp y users 
db.bootcamp.belongsToMany(db.users, {
    through: "bootcamp_users",
    as: "users",
    foreignKey: "bootcamp_id"
})


//define uno a muchos entre los modelos bootcamp y users 
db.users.belongsToMany(db.bootcamp, {
    through: "bootcamp_users",
    as: "bootcamps",
    foreignKey: "users_id"
})

//exportación del archivo
module.exports = db;