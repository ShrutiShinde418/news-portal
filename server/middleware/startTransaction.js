const uuid = require("uuid");

/**
 * startTransaction
 *
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next call to next middleware
 *
 */
module.exports.startTransaction = (req, res, next) => {
  req.transactionID = uuid.v4();
  req.txnStart = Date.now();

  next();
};
