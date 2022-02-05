const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.route("/").get((req, res, next) => {
  Category.find({})
    .then(
      (data) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(data);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.route("/add-category").post((req, res, next) => {
  Category.create(req.body)
    .then(
      (category) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(category);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.route("/update-category").put((req, res, next) => {
  Category.findByIdAndUpdate(
    req.params.category,
    { $set: req.body },
    { new: true }
  )
    .then(
      (category) => {
        res.status(200).json(category);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
