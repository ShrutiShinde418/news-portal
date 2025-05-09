const { createLogger, format } = require("winston");
const winston = require("winston");

require("winston-daily-rotate-file");

/**
 * getLoggerDetails
 *
 * This function sets up the detail logger
 *
 * @param {String} filename the name of the log file
 * @param {String} loglevel logging level
 *
 * @returns {winston.Logger} returns an instance of winston logger.
 */
const getLoggerDetails = (filename, loglevel) => {
  const transport = new winston.transports.DailyRotateFile({
    filename: filename,
    datePattern: "YYYY-MM-DD",
  });

  const logger = createLogger({
    level: loglevel,
    format: format.combine(
      format.colorize(),
      format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
      format.printf((info) => `${info.timestamp} ${info.message}`)
    ),
    transports: [transport],
  });

  return logger;
};

module.exports = getLoggerDetails;
