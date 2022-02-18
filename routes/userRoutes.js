const express = require("express");

const authController = require("../controllers/authController");

const router = express.Router();

router.post("/register", authController.registerUser);
router.get(
  "/verify-email/:verificationString",
  authController.verifyRegisteredUser
);

module.exports = router;
