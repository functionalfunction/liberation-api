const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Book = require("../models/book");

jest.mock("../models/book");

const mockBook = {
  _id: "657ed53aecab0e1331d28d81",
  id: 18,
  name: "Harry Potter ve Felsefe Taşı",
  author: "J.K. Rowling",
  authorId: 2,
  __v: 0,
};

const mockBooks = [
  {
    _id: "657ed53aecab0e1331d28d81",
    id: 18,
    name: "Harry Potter ve Felsefe Taşı",
    author: "J.K. Rowling",
    authorId: 2,
    __v: 0,
  },
  {
    _id: "657ed53aecab0e1331d28d81",
    id: 19,
    name: "Harry Potter ve Sırlar Odası",
    author: "J.K. Rowling",
    authorId: 2,
    __v: 0,
  },
];

describe("BookController Tests", () => {
  beforeAll(async () => {
    Book.find.mockResolvedValue(mockBook);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("GET /books returns all the data", () => {
    const response = request(app).get("/books");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockBooks);
  });
});
