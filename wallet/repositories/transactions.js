// En esta capa del proyecto aislamos la conexion con la base de datos.
const db = require('../models') // traemos los modelos de la db

const create = async (comment) => {
    try {
        console.log('creando usuario', comment)
        const response = await db.Transactions.create(comment);
        return response;
    } catch (error) {
        console.log('creando usuario', error, comment)
    }
    
};

module.exports = { create } // exportamos los metodos de forma individual para poder usarlos en el servicio
