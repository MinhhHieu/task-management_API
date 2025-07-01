const express = require("express");
const router = express.Router();

const controller = require("../controller/user.controller.js");

const registerPostValidate = require("../validates/user.validate"); 
const loginPostValidate = require("../validates/user.validate");

router.post('/register', registerPostValidate.registerPost,controller.register);

router.post('/login', loginPostValidate.loginPost,controller.login);

router.post('/password/forgot', controller.forgotPassword);

module.exports = router;