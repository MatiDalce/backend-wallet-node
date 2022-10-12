// en esta capa abstraemos solo los datos para manipularlos o usarlos.
const walletRepository = require('../repositories/wallet'); // requerimos el repositorio para acceder a los datos

const getData = async () => { // creamos la funcion que recibe los datos desde el repositorio
  const wallet = await walletRepository.getData();
  return wallet;
};

module.exports = {  // exportamos los métodos para poder utilizarlo de forma independiente
  getData
};
