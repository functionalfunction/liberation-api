const express = require("express");
const app = express();
const middlewareManager = require("./middlewares/middlewareManager");
const routerManager = require("./routers/routerManager");
const connectToDatabase = require("./utils/databaseConnector");

// Handle middlewares with MiddlewareManager
app.use(...middlewareManager);
// Handle routing with RouterManager
app.use(...routerManager);

//Establish database connection
connectToDatabase();

const port = process.env.LOCAL_PORT || 3000;
app.listen(port, () => {
  console.log(`I am up and listening on port ${port}`);
});

module.exports = app;
