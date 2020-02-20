const pg = require("pg");

const client = new pg.Client("postgres://localhost/users_todos_tests");

client.connect();

module.exports = {
  client,
};
