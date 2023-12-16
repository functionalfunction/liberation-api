const Book = require("../models/book");

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    console.log(books);
    res.json(books);
  } catch (error) {
    next(error);
  }
};

exports.getBook = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (id) {
      const book = await Book.findOne({ id: id });
      res.json(book);
    } else {
      console.log("here");
    }
  } catch (error) {
    console.log("error");
    next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    await Book.deleteOne({ id: req.params.id });
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};

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

exports.deleteAllBooks = async (req, res, next) => {
  try {
    await Book.deleteMany();
    res.status(200).json({ message: "All records are deleted!" });
  } catch (error) {
    next(error);
  }
};
