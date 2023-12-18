const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../models/user");

jest.mock("../models/user");

const mockUser = { id: 16, name: "Bookworm" };
const mockUserCreate = {
  id: 16,
  name: "Giray",
  _id: "657ec2349185da79aea50183",
  __v: 0,
};
const mockUsers = [{ id: 1, name: "Bookworm", id: 2, name: "Bookworm" }];

describe("UserController Tests", () => {
  beforeAll(async () => {
    User.findOne.mockResolvedValue(mockUser);
    User.find.mockResolvedValue(mockUsers);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("GET /users returns all the data", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUsers);
  });

  it("GET /users/:id returns one record", async () => {
    const response = await request(app).get("/users/:id");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUser);
  });
});
