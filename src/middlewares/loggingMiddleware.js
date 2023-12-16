const morgan = require("morgan");

const loggingMiddleware = morgan("dev");

module.exports = loggingMiddleware;
