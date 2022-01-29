const Subscription = require("../models/Subscription");

exports.getSubscribers = async (req, res, next) => {
  Subscription.find({})
    .then(
      (subscribers) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(subscribers);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.insertSubscriber = async (req, res, next) => {
  Subscription.create(req.body)
    .then(
      (subscriber) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json({
          message: "Subscription added successfully",
          subscriber: subscriber,
        });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.deleteSubscriber = async (req, res, next) => {
  Subscription.findByIdAndRemove(req.params.subscriberId)
    .then(
      (resp) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(resp);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};
