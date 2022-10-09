// en esta capa abstraemos solo los datos para manipularlos o usarlos.
const usersRepository = require('../repositories/users.js'); // requerimos el repositorio para acceder a los datos

const getAll = async () => { // creamos la funcion que recibe los datos desde el repositorio
  const users = await usersRepository.getAll();
  return users;
};

const getOne = async (params) => {// creamos una función que recibe los parametros de la peticion 
  const id = params.id; //aislamos el id de la petición
  const user = await usersRepository.getById(id);
  if (!user) { // si no se logra llegar a ningun usuario se generará y tirará un error
    const error = new Error('The user does not exist.');
    throw error;
  }
  return user; // devolvemos el usuario
};


module.exports = {  // exportamos los métodos para poder utilizarlo de forma independiente
  getAll,
  getOne
};
