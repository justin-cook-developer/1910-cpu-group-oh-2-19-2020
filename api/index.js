const express = require("express");
const { usersRouter } = require("./users");
const { todosRouter } = require("./todos");

const apiRouter = express.Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/todos", todosRouter);

module.exports = {
  apiRouter,
};
