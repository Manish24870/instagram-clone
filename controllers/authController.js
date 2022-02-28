const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const registerValidation = require("../validation/registerValidation");
const loginValidation = require("../validation/loginValidation");
const ApiError = require("../utils/apiError");

const sendgrid = require("../utils/sendgrid");

// Function to send jwt to the user
const sendTokens = (res, accessToken, refreshToken) => {
  res.cookie("refreshToken", refreshToken, { httpOnly: true });

  res.status(200).json({
    status: "success",
    message: "Signed in succesfully",
    data: {
      accessToken,
    },
  });
};

// Route: POST /api/users/register
// Desc: Register a new user
// Access: Public
exports.registerUser = async (req, res, next) => {
  const { errors, isValid } = registerValidation(req.body);

  if (!isValid) {
    return res.status(400).json({
      status: "fail",
      message: "Input data validation failed",
      errors,
    });
  }

  try {
    const verificationString = crypto.randomBytes(64).toString("hex");
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      verification: {
        verified: false,
        verificationString: verificationString,
      },
    });

    // Create access and refresh tokens
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY }
    );
    const refreshToken = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY }
    );

    newUser.refreshTokens.push(refreshToken);

    await newUser.save();

    // Send email
    sendgrid.sendVerificationEmail(newUser);

    sendTokens(res, accessToken, refreshToken);
  } catch (err) {
    next(err);
  }
};

// Route: POST /api/users/login
// Desc: Login user
// Access: Public
exports.loginUser = async (req, res, next) => {
  const { errors, isValid } = loginValidation(req.body);

  if (!isValid) {
    return res.status(400).json({
      status: "fail",
      message: "Input data validation failed",
      errors,
    });
  }
  try {
    const foundUser = await User.findOne({
      $or: [
        { username: req.body.usernameOrEmail },
        { email: req.body.usernameOrEmail },
      ],
    }).select("+password");

    // Compare the password
    if (
      !foundUser ||
      !(await foundUser.comparePassword(req.body.password, foundUser.password))
    ) {
      return next(new ApiError("Invalid credentials", 401));
    }

    // Create access and refresh tokens
    const accessToken = jwt.sign(
      { userId: foundUser._id },
      process.env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY }
    );
    const refreshToken = jwt.sign(
      { userId: foundUser._id },
      process.env.JWT_REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY }
    );

    foundUser.refreshTokens.push(refreshToken);
    await foundUser.save();

    sendTokens(res, accessToken, refreshToken);
  } catch (err) {
    next(err);
  }
};

// Route: GET /api/users/refresh-token
// Desc: Generate new access token from a refresh token
// Access: Private
exports.handleRefreshToken = async (req, res, next) => {
  const cookies = req.cookies;

  // Check if there is a refreshToken cookie
  if (!cookies?.refreshToken) {
    return next(new ApiError("Please login again", 400));
  }

  const { refreshToken } = cookies;

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_TOKEN_SECRET
    );

    const foundUser = await User.findById(decoded.userId);

    if (!foundUser) {
      return next(new ApiError("User not found. Login again.", 404));
    }

    // Check if this refresh token belongs to the user
    if (!foundUser.refreshTokens.includes(refreshToken)) {
      return next(new ApiError("Invaid refresh token."));
    }

    const accessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY }
    );

    res.status(200).json({
      status: "success",
      message: "New access token generated",
      data: {
        accessToken,
      },
    });
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return next(new ApiError("Invalid refresh token. Login again.", 400));
    }

    if (err.name === "TokenExpiredError") {
      return next(new ApiError("Refresh token expired", 403));
    }
    next(err);
  }
};

// Route: POST /api/users/logout
// Desc: Logout User
// Access: Private
exports.logoutUser = async (req, res, next) => {
  const cookies = req.cookies;

  // Check if there is a refreshToken cookie
  if (!cookies?.refreshToken) {
    return next(new ApiError("Please login again", 400));
  }

  try {
    const refreshToken = cookies.refreshToken;

    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_TOKEN_SECRET
    );
    const foundUser = await User.findById(decoded.userId);

    if (!foundUser || !foundUser._id.equals(req.user._id)) {
      res.clearCookie("refreshToken", { httpOnly: true });
      return next(new ApiError("Invalid user. Please login again", 400));
    }

    // Delete the refresh token from DB
    const refreshTokenIndex = foundUser.refreshTokens.findIndex(
      (el) => el === refreshToken
    );

    // If the refresh token is invalid
    if (refreshTokenIndex === -1) {
      res.clearCookie("refreshToken", { httpOnly: true });
      return next(
        new ApiError("Invalid refresh token. Please login again", 400)
      );
    }

    foundUser.refreshTokens.splice(refreshTokenIndex, 1);
    await foundUser.save();
    res.clearCookie("refreshToken", { httpOnly: true });
    res.status(200).json({
      status: "success",
      message: "Logged out successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Route: GET /api/users/verify-email/:verificationUrl
// Desc: Verify the email registered user
// Access: Public
exports.verifyRegisteredUser = async (req, res, next) => {
  const [verificationString, userId] = req.params.verificationString.split(".");
  const user = await User.findById(userId).select(
    "+verification.verificationString"
  );

  if (!user) {
    return next(new ApiError("User not found", 404));
  }

  if (user.verification.verificationString !== verificationString) {
    return next(new ApiError("Invalid verification link", 400));
  }

  if (user.verification.verified) {
    return next(new ApiError("User already verified"));
  }

  user.verification.verified = true;
  delete (await user.save());
  res.status(200).json({
    status: "success",
    message: "User verified successfully",
    data: {
      user,
    },
  });
};
