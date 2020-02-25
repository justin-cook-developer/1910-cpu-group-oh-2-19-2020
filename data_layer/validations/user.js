const Joi = require("@hapi/joi");

const userSchema = Joi.object({
  firstName: Joi.string()
    .min(1)
    .max(100)
    .required(),
  lastName: Joi.string()
    .min(1)
    .max(100)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(1)
    .max(20)
    .required(),
});

module.exports = {
  userSchema,
};
