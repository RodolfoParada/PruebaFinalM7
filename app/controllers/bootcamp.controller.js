const db = require("./../models/index")
const Bootcamp = db.bootcamp
const Users = db.users;

// Método para Crear y guardar un nuevo Bootcamp llamado createBootcamp.
exports.crearBootcamp = async (bootcamp) => {
    try {
        const registroBootcamp = await Bootcamp.create(bootcamp)
        return registroBootcamp;
    } catch (error) {
        console.log("Error registrando Bootcamp", error);
        return null
    }
}

// // Método para Obtener los Bootcamp por id llamado findById.
// exports.getBootcampById = async (id) => {
//     try {
//         const bootcamp = await Bootcamp.findById(id);

//         if (!bootcamp) {
//             console.log(`No se encontró ningún Bootcamp con el ID ${id}`);
//             return null;
//         }
//         return bootcamp;
//     } catch (error) {
//         console.log('Error obteniendo Bootcamp por ID', error);
//         return null;
//     }
// };


// Método para Obtener los Bootcamp por id llamado findById.
exports.findById = async (bootcampId) => {
    try {
        const bootcamp = await Bootcamp.findByPk(bootcampId, {
            attributes: ['title'],
            include: [{
                model: User,
                as: 'users', // Alias for the association
                attributes: ['firstName', 'lastName'],
                through: {
                    attributes: []
                }
            }, ],
        });

        if (!bootcamp) {
            throw new Error(`Bootcamp with ID ${bootcampId} not found`);
        }

        return bootcamp;
    } catch (err) {
        console.log('Error finding bootcamp by ID:', err);
        return null;
    }
};



// Método para Obtener todos los Usuarios incluyendo los Bootcamp llamado findAll.
// exports.findAll = async () => {
//     try {
//         const bootcamps = await Bootcamp.findAll({
//             include: [{
//                 model: Bootcamp,
//                 as: 'bootcamps'
//             }],
//         });
//         return bootcamps;
//     } catch (error) {
//         console.log('Error obteniendo todos los usuarios', error);
//         return null;
//     }
// };


// Método para Obtener todos los Usuarios incluyendo los Bootcamp llamado findAll.
exports.findAll = async () => {
    try {
        const bootcamps = await Bootcamp.findAll({
            attributes: ['title'],
            include: [{
                model: Users,
                as: 'users',
                attributes: ['firstName', 'lastName'],
                through: {
                    attributes: []
                }
            }]
        });
        return bootcamps;
    } catch (err) {
        console.log('Error finding all bootcamps:', err);
        return null;
    }
}








// Método para Agregar un Usuario al Bootcamp llamado addUser.
// exports.addUser = async (idBootcamp, idUser) => {
//     try {
//         // Primero, busca el curso por su ID
//         const bootcamp = await Bootcamp.findByPk(idBootcamp);
//         if (!bootcamp) {
//             console.log(`No se encontró ningún curso con el ID ${idBootcamp}`);
//             return null;
//         }
//         const user = await Users.findByPk(idUser)
//         if (!user) { //Validación para verificar la existencia del usuario
//             console.log("Participante no encontrado " + idUser);
//             return null
//         }

//         // Luego, crea un nuevo participante y lo asocia al curso
//         const nuevoUser = await Users.create(idUser);
//         await curso.addUser(nuevoUser);

//         // Devuelve el participante recién creado
//         return nuevoUser;
//     } catch (error) {
//         console.log("Error agregando usuario al curso", error);
//         return null;
//     }
// };