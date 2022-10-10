const express = require("express");

const router = express.Router();
// requerimos el controlador que arma la petición
const walletController = require("../controllers/wallet");
//indicamos el verbo que atendemos de la petición (get, post, put, patch, delete) y que método del controlador actúa.
router.get("/", walletController.getData);

module.exports = router;