const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
    minlength: 5,
    select: false,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
    default: "user",
  },
  avatar: {
    type: String,
    required: true,
    default: "default-profile-pic.png",
  },
  verification: {
    verified: {
      type: Boolean,
      required: true,
      default: false,
    },
    verificationString: {
      type: String,
      required: true,
      select: false,
    },
  },
  refreshTokens: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Function to compare passwords
userSchema.methods.comparePassword = async (inputPassword, dbPassword) =>
  await bcrypt.compare(inputPassword, dbPassword);

const User = mongoose.model("User", userSchema);

module.exports = User;
