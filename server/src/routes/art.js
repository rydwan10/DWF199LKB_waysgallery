const express = require("express");

const router = express.Router();

const { auth } = require("../middlewares/auth");

const { uploadArts } = require("../controllers/art");
const { artUploadImages } = require("../middlewares/artUploadImages");

router.post("/upload-arts", auth, artUploadImages("images"), uploadArts);

module.exports = router;
