const express = require("express");
const router = express.Router();

const controller = require("../controller/task.controller.js");

const taskPost = require("../validates/task.validate");

router.get('/', controller.index);

router.get('/detail/:id', controller.detail);

router.patch('/change-status/:id', controller.changeStatus);

router.patch('/change-multi', controller.changeMulti);

router.post('/create', taskPost.taskPost, controller.create);

module.exports = router;