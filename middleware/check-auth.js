const jwt = require("jsonwebtoken");
let config = require("../config/config");

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.json({
      status: "error",
      message: "Authorization failed",
    });
  }
  try {
    const decoded = jwt.verify(token, config.passwordToken);
    req.userData = decoded;
    next();
  } catch (err) {
    return res.json({
      status: "error",
      message: "Authorization failed",
    });
  }
};

module.exports = checkAuth;
