const express = require("express");
const router = express.Router();

const controller = require("../controller/user.controller.js");

const registerPostValidate = require("../validates/user.validate"); 

router.post('/register', registerPostValidate.registerPost,controller.register);

module.exports = router;