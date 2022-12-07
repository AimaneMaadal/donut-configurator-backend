const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const signup = (req, res, next) => {
  User.find({ username: req.body.username })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        //er bestaat al een user met deze username
        return res.json({
          status: "error",
          message: "Deze gebruiker bestaat al. Log in met je account.",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            console.log(err);
            return res.json({
              status: "error",
              message: "Er ging iets mis, probeer opnieuw.",
            });
          } else {
            const user = new User({
              username: req.body.username,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.json({
                  status: "success",
                  data: {
                    username: result.username,
                    password: result.password,
                  },
                });
              })
              .catch((err) => {
                console.log(err);
                res.json({
                  status: "error",
                  message: "Er ging iets mis, probeer opnieuw.",
                });
              });
          }
        });
      }
    });
};

module.exports.signup = signup;
