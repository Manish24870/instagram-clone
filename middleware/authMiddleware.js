const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const ApiError = require("../utils/apiError");

// Middleware function to check authentication
exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // If there is no authorization header
  if (!token) {
    return next(new ApiError("You are not logged in", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
    const foundUser = await User.findById(decoded.userId);

    if (!foundUser) {
      return next(new ApiError("User not found. Login again."), 404);
    }
    req.user = foundUser;
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return next(new ApiError("Invalid token. Login again.", 400));
    }

    if (err.name === "TokenExpiredError") {
      return next(new ApiError("Token expired", 403));
    }
  }
};

// Middleware function to check and restrict users based on roles
exports.restrict = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError("You are not allowed to perform this action", 403)
      );
    }
    next();
  };
};
