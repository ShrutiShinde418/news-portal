const express = require("express");
const subscriptionRouter = express.Router();
const {
  getSubscribers,
  insertSubscriber,
  deleteSubscriber,
} = require("../controllers/subscriptionController");

subscriptionRouter.route("/get-subscribers").get(getSubscribers);

subscriptionRouter.route("/add-subscriber").post(insertSubscriber);

subscriptionRouter
  .route("/delete-subscriber/:subscriberId")
  .delete(deleteSubscriber);

module.exports = subscriptionRouter;
