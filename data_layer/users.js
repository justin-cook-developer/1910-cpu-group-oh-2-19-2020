const { client } = require("./client");

const createUser = async ({ firstName, lastName, email, password }) => {
  const { rows } = await client.query(
    `
      INSERT INTO users(first_name, last_name, email, password) VALUES(
        $1, $2, $3, $4
      ) RETURNING *;
    `,
    [firstName, lastName, email, password]
  );

  return rows[0];
};

const readUser = async ({ email, password }) => {
  const { rows } = await client.query(
    `
      SELECT * FROM users WHERE email=$1 AND password=$2
    `,
    [email, password]
  );

  return rows[0];
};

module.exports = {
  createUser,
  readUser,
};
