const express = require("express");

const router = express.Router();

const {
  register,
  login,
} = require("../controllers/authController");

const authLimiter = require("../middleware/authLimiter");

const {
  validateRegister,
  validateLogin,
} = require("../middleware/authValidation");

router.post(
  "/register",
  authLimiter,
  validateRegister,
  register
);

router.post(
  "/login",
  authLimiter,
  validateLogin,
  login
);

module.exports = router;