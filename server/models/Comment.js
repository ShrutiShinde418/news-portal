const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    comment: {
      type: String,
      required: true,
    },
    newsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NewsPost",
    },
  },
  { timestamps: true }
);

var Comments = mongoose.model("Comment", commentSchema);
module.exports = Comments;
