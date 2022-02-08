const Category = require("../models/Category");

exports.getCategories = async (req, res, next) => {
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
};

exports.addCategory = async (req, res, next) => {
  const { name, slug } = req.body;
  const image = req.file.path;
  const newCategory = new Category({ name: name, slug: slug, image: image });
  newCategory
    .save()
    .then(
      (category) => {
        res.setHeader("Content-Type", "multipart/form-data");
        res.status(200).json({ data: category, file: req.file });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.updateCategory = async (req, res, next) => {
  Category.findByIdAndUpdate(
    req.params.category,
    { $set: req.body },
    { new: true }
  )
    .then(
      (category) => {
        res.setHeader("Content-Type", "multipart/form-data");
        res.status(200).json({ category: category, file: req.file });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.deleteCategory = async (req, res, next) => {
  Category.findByIdAndRemove(req.params.categoryId)
    .then((category) => {
      res.setHeader("Content-Type", "application/json");
      res
        .status(200)
        .json({ category: category, message: "Removed Successfully" });
    })
    .catch((err) => next(err));
};
