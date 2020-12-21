const express = require("express");

const router = express.Router();

const { auth } = require("../middlewares/auth");

const { addProject, viewProject } = require("../controllers/project");

const { projectUploadImages } = require("../middlewares/projectUploadImages");

router.post("/project", auth, projectUploadImages("images"), addProject);
router.get("/project/:id", auth, viewProject);

module.exports = router;
