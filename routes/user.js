const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js"); 
const passport = require("passport");
const userController = require("../controllers/user.js");

router
  .route("/signup")
  .get(userController.showSignUp)
  .post(wrapAsync(userController.signUp));

router
  .route("/login")
  .get(userController.showLogIn)
  .post(passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}), userController.logIn);

router.get("/logout", userController.logout);

module.exports = router;