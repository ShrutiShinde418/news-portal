const mongoose = require("mongoose");

const newsletterSchema = mongoose.createSchema(
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
    category: {
      type: Array,
      required: true,
    },
    frequency: { type: String, required: true },
    subscriptionDate: { type: Date, default: new Date.now() },
  },
  { timestamps: true }
);

const Newsletters = mongoose.model("Newsletter", newsletterSchema);

module.exports = Newsletters;
