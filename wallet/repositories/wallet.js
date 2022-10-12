// En esta capa del proyecto aislamos la conexion con la base de datos.
const db = require('../models') // traemos los modelos de la db

const getData = async () => { // creamos una funcion para traer todos los datos
  const data = await db.Wallet.findAll({
    include: { model: db.User, as: 'user', attributes: ['first_name', 'last_name', 'email']}
  })
  return data;
};

module.exports = { getData } // exportamos los metodos de forma individual para poder usarlos en el servicio
