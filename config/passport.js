const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const { validationResult } = require("express-validator/check");


passport.use(
  "local-signin",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        var validationMessages = [];
        for(var i = 0; i<errors.array().length; i++){
            validationMessages.push(errors.array()[i].msg);
        }
        return done(
            null,
            false,
            req.flash("signinError", validationMessages)
          );
      }
      User.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(
            null,
            false,
            req.flash("signinError", "this user not found")
          );
        }
        if (!user.comparePassword(password)) {
          return done(null, false, req.flash("signinError", "wrong password"));
        }
        return done(null, user);
      });
    }
  )
);
