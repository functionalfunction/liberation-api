const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, unique: false, required: true },
  author: { type: String, unique: false, required: true },
  authorId: { type: Number, unique: false, required: false },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
