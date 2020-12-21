const express = require("express");

const router = express.Router();

const { auth } = require("../middlewares/auth");

const {
  getTransactions,
  approveOrderTransaction,
  cancelOrderTransaction,
} = require("../controllers/transaction");

router.get(`/transactions`, auth, getTransactions);
router.patch(`/transactions/:id`, auth, approveOrderTransaction);
router.patch(`/transactions/cancel/:id`, auth, cancelOrderTransaction);

module.exports = router;
