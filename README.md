# A test driven todo api with PG

In this project we will create a small api for todos and users. Each todo will belong to a user.

# Note

Storing passwords in plain text is UNACCEPTABLE. NEVER DO THIS IN REAL LIFE. This is for demo purposes only.

## Setup

See SETUP.md for instructions on how to set this repo up on your local machine.

## Routes

### /todos

- GET: /todos/:userId
- POST: /todos/:userId
- DELETE: /todos/:todoId
- PUT: /todos/:todoId

### /users

- GET: /users/:email/:password
- POST: /users

## Data Model

### Todo

- id: uuid
- text: text
- completed: boolean
- userId: uuid

### User

- id: uuid
- first_name: varchar
- last_name: varchar
- email: varchar(255)
- password: varchar
