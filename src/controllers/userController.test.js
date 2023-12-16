const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../models/user");

jest.mock("../models/user");

const mockUser = { id: 7, name: "Bookworm" };
const mockUsers = [{ id: 1, name: "Bookworm", id: 2, name: "Bookworm" }];

describe("User DB Tests", () => {
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

  it("GET /users/:id returns one record", async () => {
    const response = await request(app).get("/users/:id");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUser);
  });
});
