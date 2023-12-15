// Manage routers
const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const bookRouter = require("./bookRouter");

const routerArray = [userRouter, bookRouter];

module.exports = routerArray;
