const { userSchema } = require("../data_layer/validations/index");
const { JoiError } = require("../utils");

const isValidUser = async (request, response, next) => {
  try {
    const { firstName, lastName, email, password } = request.body;

    const user = { firstName, lastName, email, password };

    await userSchema.validateAsync(user);

    request.user = user;

    next();
  } catch (error) {
    if (error.hasOwnProperty("details")) {
      next(new JoiError(error.details[0]));
    } else {
      next(error);
    }
  }
};

module.exports = {
  isValidUser,
};
