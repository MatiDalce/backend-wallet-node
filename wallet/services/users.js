// en esta capa abstraemos solo los datos para manipularlos o usarlos.
const usersRepository = require('../repositories/users.js'); // requerimos el repositorio para acceder a los datos

const getAll = async () => { // creamos la funcion que recibe los datos desde el repositorio
  const users = await usersRepository.getAll();
  return users;
};

module.exports = {  // exportamos los métodos para poder utilizarlo de forma independiente
  getAll
};
