const db = require("./app/models/index")
const usuarioControlador = requiere('./app/controllers/usersBoot.controller.js')
const bootControlador = requiere('./app/controllers/bootcamp.controller.js')
const useBootControlador = requiere('./app/controllers/usersBoot.controller.js')


// Método para crear usuarios
const creandoUser = async () => {
    const user1 = await usuarioControlador.crearUser({
        firstName: 'Emiliano',
        lastName: 'Figueroa',
        email: 'emi.figue@correo.com'
    })
    const user2 = await usuarioControlador.crearUser({
        firstName: 'Enrique',
        lastName: 'Díaz',
        email: 'enr_daz@correo.com'
    })
    const user3 = await usuarioControlador.crearUser({
        firstName: 'Eli',
        lastName: 'Maldonado',
        email: 'maldona.eli1@correo.com'
    })
    const user4 = await usuarioControlador.crearUser({
        firstName: 'Cecilia',
        lastName: 'varaona',
        email: 'caci_var@correo.com'
    })
}


// Método para crear Bootcamp 
const creacionBootcamp = async () => {
    const bootcamp_01 = await bootControlador.createBootcamp({
        title: 'Introduciendo El Bootcamp De React.',
        cue: 10,
        description: 'React es la librería más usada en JavaScript para el desarrollo de interfaces.'
    })
    const bootcamp_02 = await bootControlador.createBootcamp({
        title: 'Bootcamp Desarrollo Web Full Stack.',
        cue: 12,
        description: 'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.'
    })
    const bootcamp_03 = await bootControlador.createBootcamp({
        title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning.',
        cue: 18,
        description: 'Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.'
    })
}

// Método Añadir usuarios a Bootcamps
const creacionUserBoot = async () => {
    const inscripcion_1 = await useBootControlador.addUser(1, 1)
    const inscripcion_2 = await useBootControlador.addUser(1, 2)
    const inscripcion_3 = await useBootControlador.addUser(2, 1)
    const inscripcion_4 = await useBootControlador.addUser(3, 1)
    const inscripcion_5 = await useBootControlador.addUser(3, 2)
    const inscripcion_6 = await useBootControlador.addUser(3, 4)
}

// Método para consultar a un usuario por ID, incluidos los Bootcamps en los que está inscrito
const buscaUsersBootcamp = async () => {
    const userId = 1;
    const user = await usuarioControlador.findUserById(userId);
    if (!user) {
        console.log(`Usuario con ID ${userId} no disponible.`);
    } else {
        console.log("Usuario vinculado a bootcamps:");
        console.log(JSON.stringify(user, null, 4));
    }
}

// Método para consultar a todos los usuarios con su Bootcamp
const TodosUsersBootcamp = async () => {
    const result = await usuarioControlador.findUserAll()
    console.log(JSON.stringify(result, null, 4))
}

// Método  para actualizar el usuario según su id.
const ActualizarUsuario = async () => {
    const userId = 1;
    const ActualizarUsuario = {
        firstName: 'Sancho',
        lastName: 'Panza'
    };

    const result = await usuarioControlador.updateUserById(userId, updatedUserInformation)
    if (result) {
        console.log(`Nuevo valor de usuario con ID ${userId}: `, updatedUserInformation);
    } else {
        console.log(`La actualizacion del usuario Fallo ${userId}`);
    }
}

// Método para borrar un usuario por id
const borrarId = async () => {
    const userId = 1; //
    const result = await usuarioControlador.deleteUserById(userId);
    if (result) {
        console.log(`Usuario con ID ${userId} fue eliminado`);
    } else {
        // If no rows were deleted, print the message
        console.log(`No se pudo eliminar el usuario con ID ${userId}.`);
    }
}

// Método para consultar el Bootcamp por id, incluidos sus usuarios
const encontrarBootId = async () => {
    const bootcampId = 1;
    const result = await bootcampController.findById(bootcampId);
    if (result) {
        console.log(`Bootcamp con ID ${bootcampId}:`);
        console.log(JSON.stringify(result, null, 4));
    } else {
        console.log(`Bootcamp con ID ${bootcampId} no se encontro.`);
    }
}

// Método para consultar todos los Bootcamps, incluidos sus usuarios
const TodosBootUsers = async () => {
    const result = await bootControlador.findAll();
    if (result) {
        console.log('Todos los bootcamps con usuarios asociados:');
        console.log(JSON.stringify(result, null, 4));
    } else {
        console.log('No se encontro nada ');
    }
}



//     const infoCurso = await controller.consultarCurso(1)
//     console.log("InfoCurso", JSON.stringify(infoCurso, null, 4));

//     const infoParticipante = await controller.consultarParticipante(4)
//     console.log("InfoParticipante", JSON.stringify(infoParticipante, null, 4));

//     console.log("Ejecución exitosa");
// }


db.conexion.sync().then(() => {
    creandoUser();
    creacionBootcamp();
    creacionUserBoot();
    buscaUsersBootcamp();
    TodosUsersBootcamp();
    ActualizarUsuario();
    borrarId();
    encontrarBootId();
    TodosBootUsers();
})