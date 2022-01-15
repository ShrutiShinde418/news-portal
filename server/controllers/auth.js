const User = require("../models/User.js");
const ErrorResponse = require("../utils/errorResponse");
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("User not found", 401));
    }
    sendToken(user, 201, res);
  } catch (error) {
    return next(new ErrorResponse(error.message, 500));
  }
};

exports.forgotPassword = (req, res, next) => {
  res.send("FP route");
};

exports.resetPassword = (req, res, next) => {
  res.send("rP route");
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
  });
};
