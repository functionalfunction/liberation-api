const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUser);
router.post("/users/create", userController.createUser);
router.delete("/users/delete/:id", userController.deleteUser);

module.exports = router;
