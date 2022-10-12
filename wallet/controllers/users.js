//en esta capa de la api armamos la respuesta final de la petición
const usersService = require('../services/users');

const getAll = async (req, res, next) => {  //creamos el método que da la respuesta a la petición get de todos los usuarios
  try {
    const users = await usersService.getAll();
    res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

module.exports = { getAll } // exportamos los métodos para poder utilizarlos en la ruta corresponiente