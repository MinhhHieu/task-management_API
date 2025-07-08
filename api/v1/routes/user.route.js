const express = require("express");
const router = express.Router();

const controller = require("../controller/user.controller.js");

const registerPostValidate = require("../validates/user.validate"); 
const loginPostValidate = require("../validates/user.validate");

const authMiddleware = require("../middlewares/auth.middleware");

router.post('/register', registerPostValidate.registerPost,controller.register);

router.post('/login', loginPostValidate.loginPost,controller.login);

router.post('/password/forgot', controller.forgotPassword);

router.post('/password/otp', controller.otpPassword);

router.post('/password/reset', controller.resetPassword);

router.get('/information', authMiddleware.requireAuth, controller.informationUser);

module.exports = router;