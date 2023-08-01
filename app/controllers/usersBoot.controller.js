const db = require('./../models/index.js');
const User = db.user;
const Bootcamp = db.bootcamp;

//Método para Agregar un Usuario al Bootcamp llamado addUser.
exports.addUser = async (bootcampId, userId) => {
    try {
        const bootcamp = await Bootcamp.findByPk(bootcampId);
        if (!bootcamp) {
            console.log(`Bootcamp with ID ${bootcampId} not found`);
            return false;
        }
        const user = await User.findByPk(userId);
        if (!user) {
            console.log(`User with ID ${userId} not found`);
            return false;
        }
        await bootcamp.addUser(user);
        console.log(`Agregado el usuario id=${user.id} al bootcamp con id=${bootcamp.id}`);

        console.log(`User ${user.firstName} ${user.lastName} Agragado al Bootcamp ${bootcamp.title}`);

        return true;
    } catch (err) {
        console.log('Error adding user to bootcamp:', err);

        return false;
    }
}