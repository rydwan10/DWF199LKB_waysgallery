const express = require("express");
const router = express.Router();

const {
  getUsers,
  deleteUser,
  getUserById,
  updateUserById,
} = require("../controllers/user");
const { auth } = require("../middlewares/auth");
const { uploadProfileImage } = require("../middlewares/uploadProfileImage");

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", auth, deleteUser);
router.patch("/users/:id", auth, uploadProfileImage("avatar"), updateUserById);

module.exports = router;
