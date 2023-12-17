const User = require("../models/user");
const messages = require("../resources/messages");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await User.findOne({ id: id });

    console.log(user);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: messages.userDoesNotExists });
    }
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { id, name } = req.body;
    console.log("CONSOOOOOOOOOOOLE:", req.body);
    const newUser = new User({ id, name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

// TODO: change the id control to prevent some input other than number
exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (id) {
      await User.deleteOne({ id: id });
      res.status(200).json({ message: messages.userDeleted });
    } else {
      res.status(404).json({ message: messages.userDoesNotExists });
    }
  } catch (error) {
    next(error);
  }
};
