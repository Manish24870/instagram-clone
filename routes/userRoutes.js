const express = require("express");

const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", authMiddleware.protect, authController.logoutUser);
router.get(
  "/verify-email/:verificationString",
  authController.verifyRegisteredUser
);

router.get("/refresh-token", authController.handleRefreshToken);

module.exports = router;
