const express = require("express");
const { apiRouter } = require("./api/index");
const { joiErrorParser, JoiError } = require("./utils");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use((error, request, response, next) => {
  if (error instanceof JoiError) {
    response.status(400).json(joiErrorParser(error.errorObject));
  } else {
    response.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
