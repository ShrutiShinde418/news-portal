const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, " Please enter your name"],
    },
    email: { type: String, required: [true, " Please enter your email"] },
    comment: {
      type: String,
      required: [true, " Please enter your comment"],
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
