const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatorLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "E-Mail fields is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "E-Mail is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password fields is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
