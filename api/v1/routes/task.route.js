const express = require("express");
const router = express.Router();

const controller = require("../controller/task.controller.js");

const taskPost = require("../validates/task.validate");
const taskEdit = require("../validates/taskEdit.validate");

router.get('/', controller.index);

router.get('/detail/:id', controller.detail);

router.patch('/change-status/:id', controller.changeStatus);

router.patch('/change-multi', controller.changeMulti);

router.post('/create', taskPost.taskPost, controller.create);

router.patch('/edit/:id', taskEdit.taskEdit,controller.edit);

router.delete('/delete/:id', controller.delete); 

router.delete('/delete-multi', controller.deleteMulti); 

module.exports = router;