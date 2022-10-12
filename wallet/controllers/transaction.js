//en esta capa de la api armamos la respuesta final de la petición
const transactionService = require('../services/transactions');

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const comment = await transactionService.create(data);
    res.json(comment)
  } catch (e) {
    next(e);
  }
};

module.exports = { create } // exportamos los métodos para poder utilizarlos en la ruta corresponiente