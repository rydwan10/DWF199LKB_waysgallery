const express = require("express");

const router = express.Router();

const { auth } = require("../middlewares/auth");

const { createOrder } = require("../controllers/hire");

router.post("/hire", auth, createOrder);

module.exports = router;
