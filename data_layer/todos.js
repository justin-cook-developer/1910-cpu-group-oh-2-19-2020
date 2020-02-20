const { client } = require("./client");

const createTodo = async ({ text, completed = false, userId }) => {
  const { rows } = await client.query(
    `
    INSERT INTO todos(text, completed, userId) VALUES (
      $1, $2, $3
    )
    `,
    [text, completed, userId]
  );

  return rows[0];
};

const readTodos = async ({ userId }) => {
  const { rows } = await client.query(
    `
    SELECT * FROM todos WHERE userId=$1
    `,
    [userId]
  );

  return rows;
};

module.exports = {
  createTodo,
  readTodos,
};
