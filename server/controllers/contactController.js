const Contact = require("../models/Contact");

exports.newMessage = async (req, res, next) => {
  Contact.create(req.body)
    .then(
      (message) => {
        res.setHeader("Content-Type", "application/json");
        res
          .status(200)
          .json({ response: "Message Sent Successfully", message: message });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.getMessages = async (req, res, next) => {
  Contact.findOne({})
    .then(
      (contacts) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};
