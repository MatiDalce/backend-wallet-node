// En esta capa del proyecto aislamos la conexion con la base de datos.

const fs = require('fs');
const path = require('path');
const userspath = path.join(__dirname, '../db/usuarios.json');
const users = JSON.parse(fs.readFileSync(userspath, 'utf-8'));


const getAll = async () => { // creamos una funcion para traer todos los datos
  const data = await users;
  return data;
};


module.exports = { getAll } // exportamos los metodos de forma individual para poder usarlos en el servicio
