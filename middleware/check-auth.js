const jwt = require("jsonwebtoken");
let config = require("../config/config");

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, config.passwordToken);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.json({
      status: "error",
      message: "Auth failed",
    });
  }
};

module.exports = checkAuth;
