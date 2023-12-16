const bodyParser = require("body-parser");
const loggingMiddleware = require("./loggingMiddleware");

//Json converter
const jsonMiddleware = bodyParser.json();

const middlewareArray = [jsonMiddleware, loggingMiddleware];

module.exports = middlewareArray;
