const mongoose = require("mongoose");
const config = require("../../config/database.config");

const connectToDatabase = async () => {
  await mongoose.connect(config.database.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

module.exports = connectToDatabase;
