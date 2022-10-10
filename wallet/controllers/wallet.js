//en esta capa de la api armamos la respuesta final de la petición
const walletService = require('../services/wallet');

const getData = async (req, res, next) => {  //creamos el método que da la respuesta a la petición get de todos los usuarios
  try {
    const wallet = await walletService.getData();
    res.status(200).json(wallet);
  } catch (e) {
    next(e);
  }
};

module.exports = { getData } // exportamos los métodos para poder utilizarlos en la ruta corresponiente