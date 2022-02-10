const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, " Please enter your email"],
    },
    phone: {
      type: String,
      required: [true, " Please enter your phone number"],
    },
    category: [{ type: String, required: [true, " Please select a category"] }],
    frequency: { type: String, required: [true, " Please choose a frequency"] },
    numberOfNews: {
      type: Number,
      required: [true, " Please enter the number of news"],
    },
    subscriptionDate: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const Subscriptions = mongoose.model("Subscriptions", subscriptionSchema);

module.exports = Subscriptions;
