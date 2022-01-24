const express = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  getUsers,
} = require("../controllers/auth");
const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgot-password").post(forgotPassword);

router.route("/getUsers").get(getUsers);

router.route("/reset-password/:resetToken").put(resetPassword);

module.exports = router;
