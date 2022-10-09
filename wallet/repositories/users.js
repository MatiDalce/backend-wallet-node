// En esta capa del proyecto aislamos la conexion con la base de datos.
const db = require('../models') // traemos los modelos de la db

const getAll = async () => { // creamos una funcion para traer todos los datos
  const data = await db.User.findAll();
  return data;
};

const getOne = async (id) => { // creamos un método para obtener un usuario en particular
  const data = await db.User.findByPk(id); // metodo de la librería sequelize para identificar un registro por su id
  return data;

};

module.exports = { 
 getAll,
 getOne 
} // exportamos los metodos de forma individual para poder usarlos en el servicio
