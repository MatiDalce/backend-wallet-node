const express = require("express");

const router  = express.Router();
const transactionsController = require("../controllers/transaction");

router.post("/", transactionsController.create);
router.get("/", (req,res) => res.send('TODO: A implementar'))

module.exports = router;