const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    category: [{ type: String, required: true }],
    frequency: { type: String, required: true },
    numberOfNews: { type: Number, required: true },
    subscriptionDate: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const Subscriptions = mongoose.model("Subscriptions", subscriptionSchema);

module.exports = Subscriptions;
