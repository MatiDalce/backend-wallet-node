// Este es un index donde manejamos todos los endpoints
const express = require('express');
const router = express.Router();

const usersRouter  = require('./users'); // requerimos el archivo que maneja la ruta individual
const walletRouter = require('./wallet');
const transactionRouter = require('./transaction');

router.use('/transaction', transactionRouter); // recibimos la petición e indicamos que archivo se encarga de manejar dicha petición
router.use('/users', usersRouter); // recibimos la petición e indicamos que archivo se encarga de manejar dicha petición
router.use('/wallet', walletRouter); // recibimos la petición e indicamos que archivo se encarga de manejar dicha petición

module.exports = router;
