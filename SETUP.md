# Setup

To use this project, you must have Postgres installed and configured.

- fork and clone this repo
- execute `npm install`
- change the connection string in ./data_layer/client.js to meet your system
- execute `createdb users_todos_tests`
- execute `npm run sync` to setup the tables
- execute `npm run start:dev` to run the server in watch mode via nodemon
