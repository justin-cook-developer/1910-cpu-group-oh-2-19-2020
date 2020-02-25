const express = require("express");
const { readUser, createUser } = require("../data_layer/index");
const { isValidUser } = require("../middleware/index");

const usersRouter = express.Router();

usersRouter.get("/:email/:password", async (request, response, next) => {
  try {
    const { email, password } = request.params;

    const user = await readUser({ email, password });

    response.json(user);
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/", isValidUser, async (request, response, next) => {
  try {
    const user = await createUser(request.user);

    response.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  usersRouter,
};
