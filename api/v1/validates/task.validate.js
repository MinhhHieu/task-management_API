module.exports.taskPost = (req, res, next) => {
    if(!req.body.title) {
        res.json({
            code: 400,
            message: "Vui lòng nhập tiêu đề!"
        });
        return
    }

    if(!req.body.content) {
        res.json({
            code: 400,
            message: "Vui lòng nhập nội dung!"
        });
        return
    }

    if(!req.body.timeStart) {
        res.json({
            code: 400,
            message: "Vui lòng nhập time Start!"
        });
        return
    }

    if(!req.body.timeFinish) {
        res.json({
            code: 400,
            message: "Vui lòng nhập time Finish!"
        });
        return
    }
    next();
}