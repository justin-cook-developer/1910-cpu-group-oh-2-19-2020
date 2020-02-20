const { createUser, readUser } = require("./users");
const { createTodo, readTodos } = require("./todos");

module.exports = {
  createUser,
  readUser,
  createTodo,
  readTodos,
};
