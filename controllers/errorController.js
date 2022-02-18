const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  err.message = err.message || "Some error occured";
  console.log(err);

  // Duplicate mongoDB data error
  if (err.code === 11000) {
    err.statusCode = 400;
    err.status = "fail";
    const customErr = handleDuplicateDataErrors(err);

    return sendCustomError(err, customErr, res);
  }

  // Handle mongoDB validation errors
  if (err.name === "ValidationError") {
    err.statusCode = 400;
    err.status = "fail";
    const customErr = handleValidationErrors(err);

    return sendCustomError(err, customErr, res);
  }

  // Default error response
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

// Function to handle duplicate mongoDB data
const handleDuplicateDataErrors = (err) => {
  const errors = {};
  for (key in err.keyValue) {
    errors[key] = `This ${key} is taken`;
  }
  return errors;
};

// Function to handle mongoDB validation errors
const handleValidationErrors = (err) => {
  const errors = {};
  Object.values(err.errors).forEach((el) => (errors[el.path] = el.message));
  return errors;
};

// Function to send custom error response
const sendCustomError = (err, customErr, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    data: {
      errors: customErr,
    },
  });
};

module.exports = globalErrorHandler;
