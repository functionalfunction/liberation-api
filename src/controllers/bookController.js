const Book = require("../models/book");
const messages = require("../resources/messages");
const stringOperations = require("../utils/stringOperations");

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    console.log(books);
    res.status(200).json(books);
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
    const { id, name, author, authorId } = req.body;
    const formattedName = stringOperations.makeTheFirstLettersUppercase(name);
    console.log(formattedName);
    const newBook = new Book({ id, name: formattedName, author, authorId });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

exports.deleteAllBooks = async (req, res, next) => {
  try {
    await Book.deleteMany();
    res.status(200).json({ message: messages.allBooksAreDeleted });
  } catch (error) {
    next(error);
  }
};

exports.getBooksOfAnAAuthor = async (req, res, next) => {
  try {
    const authorId = req.params.authorId;
    console.log(authorId);

    if (authorId) {
      const books = await Book.find({ authorId: authorId });
      res.status(200).json(books);
    } else {
      res.status(404).json({ message: messages.authorDoesNotExists });
    }
  } catch (error) {
    next(error);
  }
};
