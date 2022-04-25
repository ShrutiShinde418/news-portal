const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { imageFileFilter } = require("../utils/imageFileFilter");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/category");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});


const upload = multer({ storage: storage, fileFilter: imageFileFilter });

router.route("/").get(getCategories);

router.route("/add-category").post(upload.single("image"), addCategory);

router.route("/update-category").put(upload.single("image"), updateCategory);

router.route("/delete-category/:categoryId").delete(deleteCategory);

module.exports = router;
