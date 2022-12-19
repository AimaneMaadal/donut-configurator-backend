const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
let config = require("../config/config");

const signup = (req, res, next) => {
  User.find({
      username: req.body.username
    })
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

const login = (req, res, next) => {
  User.find({
      username: req.body.username
    })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.json({
          status: "error",
          message: "Deze gebruiker bestaat niet. Maak een account aan.",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.json({
            status: "error",
            message: "Er ging iets mis, probeer opnieuw.",
          });
        }
        if (result) {
          const token = jwt.sign({
              username: user[0].username,
              userId: user[0]._id,
            },
            config.passwordToken, {
              expiresIn: "1h",
            }
          );
          return res.json({
            status: "success",
            message: "Auth successful",
            token: token,
          });
        }
        res.json({
          status: "error",
          message: "Auth failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: "error",
        message: "Er ging iets mis, probeer opnieuw.",
      });
    });
};

const updatePassword = async (req, res) => {
  try {
    const user = await User.findById(req.body.id);
    const isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
    if (!isMatch) {
      return res.json({
        status: "error",
        message: "Oude wachtwoord is niet correct.",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.json({
      status: "success",
      message: "Wachtwoord is succesvol gewijzigd.",
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "error",
      message: "Er ging iets mis, probeer opnieuw.",
    });
  }
};


module.exports.signup = signup;
module.exports.login = login;
module.exports.updatePassword = updatePassword;