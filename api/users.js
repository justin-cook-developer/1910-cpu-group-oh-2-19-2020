const express = require("express");
const { readUser, createUser } = require("../data_layer/index");

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

usersRouter.post("/", async (request, response, next) => {
  try {
    const { firstName, lastName, email, password } = request.body;

    const user = await createUser({ firstName, lastName, email, password });

    response.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  usersRouter,
};
