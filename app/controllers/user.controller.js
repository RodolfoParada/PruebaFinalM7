const db = require("./../models/index")
const Users = db.users
const Bootcamp = db.bootcamp


// Método para Crear y guardar usuarios llamado createUser.
exports.crearUser = async (user) => {
    try {
        const registroUser = await Users.create(user)
        return registroUser;
    } catch (error) {
        console.log("Error registrando Participante", error);
        return null
    }
}


// Método para Obtener los Bootcamp de un usuario llamado findUserById.
// exports.findUserById = async (userId) => {
//     try {
//         const usuario = await Users.findOne({
//             where: {
//                 id: userId
//             }
//         });
//         if (!usuario) {
//             return null;
//         }
//         const bootcamps = await Bootcamp.findAll({
//             where: {
//                 userId: usuario.id
//             }
//         });
//         return {
//             usuario,
//             bootcamps
//         }; 
//     } catch (error) {
//         console.log("Error al buscar el usuario por ID:", error);
//         return null;
//     }
// };

// Método para Obtener los Bootcamp de un usuario llamado findUserById.
exports.findUserById = async (userId) => {
    const user = await Users.findByPk(userId);
    if (!user) {
        console.log(`User with ID ${userId} not found`);
        return null;
    }
    const useBootcamps = await Users.findByPk(userId, {
        include: [{
            model: Bootcamp,
            as: 'bootcamps',
            attributes: ['title'],
            through: {
                attributes: []
            }
        }]
    });

    return useBootcamps;
}



// Método para Obtener todos los Usuarios incluyendo, los Bootcamp llamado findAll.
// exports.findAll = async () => {
//     try {       
//        const usuariosConBootcamps = await Users.findAll({
//             include: [Bootcamp], 
//         });
//         return usuariosConBootcamps;
//     } catch (error) {
//         console.log("Error al obtener todos los usuarios:", error);
//         return null;
//     }
// };

// Método para Obtener todos los Usuarios incluyendo, los Bootcamp llamado findAll.
exports.findUserAll = async () => {
    const usersWithBootcamps = await User.findAll({
        attributes: ['firstName', 'lastName'],
        include: [{
            model: Bootcamp,
            as: 'bootcamps',
            attributes: ['title'],
            through: {
                attributes: []
            }
        }]
    });
}








// Método para Actualizar usuario por Id llamado updateUserById.
// exports.updateUserById = async (userId, updatedUsers) => {
//     try {

//         const usuario = await Users.findOne({
//             where: {
//                 id: userId
//             }
//         });

//         if (!usuario) {
//             return null;
//         }
//         await usuario.update(updatedUsers);
//         return usuario;
//     } catch (error) {
//         console.log("Error al actualizar el usuario:", error);
//         return null;
//     }
// };

// Método para Actualizar usuario por Id llamado updateUserById.
exports.updateUserById = async (userId, updatedUser) => {
    const user = await Users.findByPk(userId);
    if (!user) {
        console.log(`User with ID ${userId} not found`);
        return false;
    }
    const [numUpdated, updatedUsers] = await Users.update(updatedUser, {
        where: {
            id: userId
        }
    });
    // Return true if at least one row was updated, otherwise false
    return numUpdated > 0;
}




// Método para Eliminar un usuario por Id llamado deleteUserById.
// exports.deleteUserById = async (userId) => {
//     try {
//         const usuario = await Users.findOne({
//             where: {
//                 id: userId
//             }
//         });
//         if (!usuario) {
//             return null;
//         }
//         await usuario.destroy();
//         return usuario;
//     } catch (error) {
//         console.log("Error al eliminar el usuario:", error);
//         return null;
//     }
// };


// Método para Eliminar un usuario por Id llamado deleteUserById.
exports.deleteUserById = async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) {
        console.log(`Usuario_ID ${userId} no existe`);
        return false;
    }
    const numRowsDeleted = await Users.destroy({
        where: {
            id: userId
        }
    });
    return numRowsDeleted > 0;
}