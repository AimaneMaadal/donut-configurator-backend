var express = require("express");
var router = express.Router();
const authorization = require("../controllers/auth");

router.post("/signup", authorization.signup);

module.exports = router;
