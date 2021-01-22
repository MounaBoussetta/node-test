const User = require("../models/user");
var passwordHash = require("password-hash");
//const { validationResult } = require('express-validator/check').validationResult
const { validationResult } = require("express-validator/check");

function addUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    var validationMessages = [];
    for(var i = 0; i<errors.array().length; i++){
        validationMessages.push(errors.array()[i].msg);
    }
    req.flash('error', validationMessages);
    res.redirect('signup');
    return;
  }
  const user = new User({
    name: req.body.name,
    email: req.body.email.toLocaleLowerCase(),
    password: passwordHash.generate(req.body.password),
  });
  User.findOne({ email: user.email }, (error, result) => {
    if (error) {
      console.log("find error", error);
      res.redirect("signup");
      return;
    }
    if (result) {
      //Email Exists
      req.flash('error', 'Email existe déjà');
      res.redirect('signup');
      return;
    } else {
      user.save((reslt, err) => {
        if (err) {
          res.redirect("signup");
          return;
        }
        user.password = undefined;
        res.json(user);
        return;
      });
    }
  });
}

// post.save(function(error) {
//     if (!error) {
//         Post.find({})
//             .populate('postedBy')
//             .populate('comments.postedBy')
//             .exec(function(error, posts) {
//                 console.log(JSON.stringify(posts, null, "\t"))
//             })
//     }
// });

function getUsers(req, res, next) {
  User.find({}, (error, result) => {
    if (error) {
      res.json({ error: error });
      return;
    }
    res.json(result);
  });
}



module.exports = {
  addUser: addUser,
  getUsers: getUsers
};
