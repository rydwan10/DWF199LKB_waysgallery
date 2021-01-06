const express = require("express");

const router = express.Router();

const { auth } = require("../middlewares/auth");

const {
  getPosts,
  getPostById,
  addPost,
  deletePostById,
  getLatestPosts,
} = require("../controllers/post");

const { postUploadImages } = require("../middlewares/postUploadImages");

router.get("/posts", auth, getPosts);
router.get("/latest-posts", auth, getLatestPosts);
router.post("/posts", auth, postUploadImages("images"), addPost);
router.get("/posts/:id", auth, getPostById);
router.delete("/posts/:id", auth, deletePostById);

module.exports = router;
