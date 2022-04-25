const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, " Please enter your email"],
    },
    subject: {
      type: String,
      required: [true, " Please enter the subject"],
    },
    message: {
      type: String,
      required: [true, " Please enter your message"],
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
