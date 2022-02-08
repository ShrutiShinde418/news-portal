const express = require("express");
const router = express.Router();
const {
  getNews,
  updateNewsPost,
  deleteNewsPost,
} = require("../controllers/newsPostsController");
const { imageFileFilter } = require("../utils/imageFileFilter");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/newsPosts/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});


const storage = multer({ storage: storage, fileFilter: imageFileFilter });

router.route("/getNewsPost").get(getNews);

router.route("/update/:newsId").put(upload.single("image"), updateNewsPost);

router.route("/delete/:newsId").delete(deleteNewsPost);

module.exports = router;
