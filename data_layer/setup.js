const { client } = require("./client");

async function sync() {
  await client.query(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    DROP TABLE IF EXISTS todos;
    DROP TABLE IF EXISTS users;

    CREATE TABLE users(
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password varchar(20) NOT NULL,
      CHECK(LENGTH(first_name) > 0),
      CHECK(LENGTH(last_name) > 0),
      CHECK(LENGTH(password) > 0),
      CHECK(LENGTH(email) > 0)
    );

    CREATE TABLE todos(
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      text TEXT NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT false,
      userId UUID REFERENCES users(id),
      CHECK(LENGTH(text) > 0)
    );
  `);
}

sync()
  .then(() => {
    console.log("we created the tables!");
  })
  .catch(console.error);
