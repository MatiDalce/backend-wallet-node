// en esta capa abstraemos solo los datos para manipularlos o usarlos.
const transactionRepository = require('../repositories/transactions.js'); // requerimos el repositorio para acceder a los datos

const create = async (comment) => {
  const newTransaction = {
    detalle: comment.detalle,
    total: comment.total,
    UserId: comment.UserId
  }
  const data = await transactionRepository.create(newTransaction);
  return data;
};

module.exports = {  // exportamos los métodos para poder utilizarlo de forma independiente
  create
};
