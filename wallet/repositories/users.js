// En esta capa del proyecto aislamos la conexion con la base de datos.
const db = require('../models') // traemos los modelos de la db

const getAll = async () => { // creamos una funcion para traer todos los datos
  const data = await db.User.findAll();
  return data;
};

module.exports = { getAll } // exportamos los metodos de forma individual para poder usarlos en el servicio
