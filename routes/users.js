var express = require("express");
var router = express.Router();
const controlUser = require("../controllers/user_control");
const { registerValidation } = require("../middleware/registerValidation");
const { signinValidation } = require("../middleware/signInValidation");
const passport = require('passport');

/* GET users listing. */
router.get("/signup", function (req, res, next) {
  var messagesError = req.flash('error');
  res.render("user/signup", { title: "Sign up", messages: messagesError });
});

router.post(
  "/signup",
  registerValidation,
  controlUser.addUser,
  function (req, res, next) {
    res.render("user/signup");
  }
);

router.get("/home", function (req, res, next) {
  res.render("user/home", { title: "Home" });
});

router.get("/signin", function (req, res, next) {
  var messagesError = req.flash('signinError');
  res.render("user/signin", { title: "Sign in", messages:  messagesError});
});

router.post(
  "/signin",
  signinValidation,
  passport.authenticate('local-signin', {
    session: false,
    successRedirect: 'home',
    failureRedirect: 'signin',
    failureFlash: true
  })
);

router.get("/getUsers", controlUser.getUsers);

module.exports = router;
