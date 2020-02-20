const express = require("express");
const { readTodos } = require("../data_layer/index");

const todosRouter = express.Router();

todosRouter.get("/:userId", async (request, response, next) => {
  try {
    const { userId } = request.params;

    const todos = await readTodos({ userId });

    response.json(todos);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  todosRouter,
};
