const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/books", bookController.getAllBooks);
router.post("/books/create", bookController.createBook);

module.exports = router;
