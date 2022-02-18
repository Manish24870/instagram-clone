const User = require("../models/userModel");
const registerValidation = require("../validation/registerValidation");

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

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await newUser.save();
    res.status(200).json({
      status: "success",
      message: "User created successfully",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    next(err);
  }
};
