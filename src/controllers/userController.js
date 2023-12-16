const User = require("../models/user");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (id) {
      const user = await User.find({ id: id });
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User does not exists" });
    }
  } catch (error) {
    next(error);
  }
};

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

exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (id) {
      await User.deleteOne({ id: id });
      res.status(200).json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User does not exists" });
    }
  } catch (error) {
    next(error);
  }
};
