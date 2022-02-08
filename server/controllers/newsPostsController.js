const NewsPosts = require("../models/NewsPost");

exports.getNews = async (req, res, next) => {
  NewsPosts.find({})
    .then((newsPosts) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(newsPosts);
    })
    .catch((err) => next(err));
};

exports.updateNewsPost = async (req, res, next) => {
  NewsPosts.findByIdAndUpdate(req.params.newsId, {
    $set: req.body,
  })
    .then(
      (newsPost) => {
        res.setHeader("Content-Type", "multipart/form-data");
        res.status(200).json({ data: newsPost, file: req.file });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.deleteNewsPost = async (req, res, next) => {
  NewsPosts.findByIdAndRemove(req.params.newsId)
    .then((newsPost) => {
      res.setHeader("Content-Type", "multipart/form-data");
      res.json({ message: "Post deleted Successfully", data: newsPost });
    })
    .catch((err) => next(err));
};
