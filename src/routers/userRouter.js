const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/users", userController.getAllUsers);
router.post("/users/create", userController.createUser);

module.exports = router;
