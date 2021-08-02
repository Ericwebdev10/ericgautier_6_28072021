const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const passwordValidator = require('../middleware/password-validator'); //https://www.npmjs.com/package/password-validator

router.post("/signup", passwordValidator, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
