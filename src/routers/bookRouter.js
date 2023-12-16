const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBook);
router.post("/books/create", bookController.createBook);
router.delete("/books/delete/:id", bookController.deleteBook);
router.delete("/books/delete", bookController.deleteAllBooks);

module.exports = router;
