const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const registerValidation = require("../validation/registerValidation");
const ApiError = require("../utils/apiError");

const sendgrid = require("../utils/sendgrid");

const sendTokens = (res, newUser, accessToken, refreshToken) => {
  res.cookie("access-token", accessToken, { httpOnly: true });
  res.cookie("refresh-token", refreshToken, { httpOnly: true });

  res.status(200).json({
    status: "success",
    message: "Signed in succesfully",
    data: {
      user: newUser,
    },
  });
};

// Route: /api/users/register
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

    // Send the tokens to user
    sendTokens(res, newUser, accessToken, refreshToken);

    // Send email
    sendgrid.sendVerificationEmail(newUser);
  } catch (err) {
    next(err);
  }
};

// Route: /api/users/verify-email/:verificationUrl
// Desc: Verify the registered user
// Access: Public
exports.verifyRegisteredUser = async (req, res, next) => {
  const [verificationString, userId] = req.params.verificationString.split(".");
  const user = await User.findById(userId);

  if (!user) {
    return next(new ApiError("User not found", 404));
  }

  if (user.verification.verificationString !== verificationString) {
    return next(new ApiError("Invalid verification link"));
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
