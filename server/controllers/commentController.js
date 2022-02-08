const Comments = require("../models/Comment");

exports.getAllComments = async (req, res, next) => {
  Comments.find({})
    .then((comments) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(comments);
    })
    .catch((err) => next(err));
};

exports.addComment = async (req, res, next) => {
  Comments.create(req.body)
    .then((comment) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(comment);
    })
    .catch((err) => next(err));
};

exports.deleteComment = async (req, res, next) => {
  Comments.findByIdAndRemove(req.params.commentId).then((comment) => {
    res.setHeader("Content-Type", "application/json");
    res
      .status(200)
      .json({ message: "Comment deleted successfully", data: comment });
  });
};
