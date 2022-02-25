const valiator = require("validator");

const isEmpty = require("../utils/isEmpty");

const loginValidation = (data) => {
  const errors = {};

  // Change undefined values to empty string
  for (const key in data) {
    data[key] = !isEmpty(data[key]) ? data[key] : "";
  }

  if (isEmpty(data.usernameOrEmail)) {
    errors.usernameOrEmail = "Username or email is required";
  }

  if (isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = loginValidation;
