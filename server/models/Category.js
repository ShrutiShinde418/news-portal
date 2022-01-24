const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      unique: true,
    },
    slug: { required: true, type: String },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", CategorySchema);


module.exports = Category;
