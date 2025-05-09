const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  name: String,
  id: Number,
});

const newsPostSchema = new Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Please select a category"],
    },
    categoryPosition: {
      type: Number,
    },
    homeSlider: {
      type: Number,
    },
    releaseData: {
      type: Date,
      default: Date.now(),
    },
    postDate: {
      type: Date,
    },
    shortHeadline: String,
    headline: {
      type: String,
      required: [true, " Please enter a headline"],
    },
    details: String,
    reporter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    section: [sectionSchema],
    image: String,
    imageAlt: String,
    imageTitle: String,
    videoURL: String,
    reference: String,
    postTag: {
      type: [{ type: String }],
    },
    latestNews: {
      type: Boolean,
      default: true,
    },
    breakingNews: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    schemaSetup: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

var NewsPosts = mongoose.model("NewsPost", newsPostSchema);

module.exports = NewsPosts;
