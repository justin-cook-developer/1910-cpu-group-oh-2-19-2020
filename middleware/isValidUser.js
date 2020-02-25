const { userSchema } = require("../data_layer/validations/index");

const isValidUser = async (request, response, next) => {
  try {
    const { firstName, lastName, email, password } = request.body;

    const user = { firstName, lastName, email, password };

    await userSchema.validateAsync(user);

    request.user = user;

    next();
  } catch (error) {
    response.status(400).json(error);
  }
};

module.exports = {
  isValidUser,
};
