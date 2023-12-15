const express = require("express");

//Json converter
const jsonMiddleware = express.json();

const middlewareArray = [jsonMiddleware];

module.exports = middlewareArray;
