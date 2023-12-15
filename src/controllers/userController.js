const User = require("../models/user");

exports.createUser = async (req, res, next) => {
  try {
    const { id, name } = req.body;
    const newUser = new User({ id, name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json(users);
  } catch (error) {
    next(error);
  }
};
