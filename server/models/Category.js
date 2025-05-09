const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
      required: [true, " Please enter the category name"],
      type: String,
      unique: true,
    },
    slug: { required: [true, " Please enter the slug"], type: String },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
