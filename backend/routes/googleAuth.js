const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    res.redirect(
  "https://stay-sense-ai-powered-homestay-insi.vercel.app/login-success?token=" +
    req.user.token
);
  }
);

module.exports = router;