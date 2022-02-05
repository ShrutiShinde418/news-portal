const express = require("express");
const contactRouter = express.Router();
const { getMessages, newMessage } = require("../controllers/contactController");
contactRouter.route("/get-messages").get(getMessages);

contactRouter.route("/new-message").post(newMessage);

module.exports = contactRouter;
