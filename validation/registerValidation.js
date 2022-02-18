const validator = require("validator");

const isEmpty = require("../utils/isEmpty");

const registerValidation = (data) => {
  const errors = {};

  // Change undefined values to empty string
  for (const key in data) {
    data[key] = !isEmpty(data[key]) ? data[key] : "";
  }

  if (data.email && !validator.isEmail(validator.trim(data.email))) {
    errors.email = "Email is invalid";
  }
  if (
    data.username &&
    !validator.isLength(validator.trim(data.username), { min: 4 })
  ) {
    errors.username = "Username must be at least 4 characters long";
  }
  if (
    data.password &&
    !validator.isLength(validator.trim(data.password), { min: 5 })
  ) {
    errors.password = "Password must be at least 5 characters long";
  }
  if (
    data.password &&
    data.passwordConfirm &&
    data.password !== data.passwordConfirm
  ) {
    errors.password = "Password must be same";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = registerValidation;
