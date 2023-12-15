const Book = require("../models/book");

exports.createBook = async (req, res, next) => {
  try {
    const { id, name, author } = req.body;
    const newBook = new Book({ id, name, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    console.log(books);
    res.json(books);
  } catch (error) {
    next(error);
  }
};
