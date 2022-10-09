//en esta capa de la api armamos la respuesta final de la petición

const usersService = require('../services/users');

const getAll = async (req, res, next) => {  //creamos el método que da la respuesta a la petición get de todos los usuarios
  try {
    const users = await usersService.getAll(); // usamos el metodo getAll de nuestro servicio para obtener todos los usuarios VER:./services/users.js
    res.status(200).json(users); // si todo salió bien devolvemos el usuario en formato json en la respuesta
  } catch (e) {
    next(e);
  }
};
const getOne = async (req, res, next) => {
  try {
    const user = await usersService.getById(req.body.id); // TODO CONSULTAR DE DONDE TOMAR ESTE PARÁMETRO PREFERENTEMENTE
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};


module.exports = { 
getAll,
getOne 
} // exportamos los métodos para poder utilizarlos en la ruta corresponiente