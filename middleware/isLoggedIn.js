const db = require("../data_layer/index");

const isLoggedIn = async (request, response, next) => {
  try {
    const { userId } = request.params;

    const userExists = await db.doesUserExist(userId);

    if (!userExists) {
      response.sendStatus(401);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isLoggedIn,
};
