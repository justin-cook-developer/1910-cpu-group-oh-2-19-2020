const express = require("express");
const { readTodos } = require("../data_layer/index");
const { isLoggedIn } = require("../middleware/isLoggedIn");

const todosRouter = express.Router();

todosRouter.get("/:userId", isLoggedIn, async (request, response, next) => {
  try {
    const { userId } = request.params;

    const todos = await readTodos({ userId });

    response.json(todos);
  } catch (error) {
    next(error);
  }
});

// todosRouter.post("/:userId", isLoggedIn, () => {
// validate that a user exists
// })

module.exports = {
  todosRouter,
};
