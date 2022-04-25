const express = require("express");
const router = express.Router();
const {
  getAllComments,
  addComment,
  deleteComment,
} = require("../controllers/commentController");

router.route("/").get(getAllComments);

router.route("/add-comment").post(addComment);

router.route("/delete/:commentId").delete(deleteComment);

module.exports = router;
