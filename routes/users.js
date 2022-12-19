var express = require("express");
var router = express.Router();
const authorization = require("../controllers/auth");

router.post("/signup", authorization.signup);
router.post("/login", authorization.login);
router.put("/update", authorization.updatePassword);


module.exports = router;
