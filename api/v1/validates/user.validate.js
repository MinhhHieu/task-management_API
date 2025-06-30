module.exports.registerPost = (req, res, next) => {
    if(!req.body.fullName) {
        res.json({
            code: 400,
            message: "Vui lòng nhập fullName!"
        });
        return;
    }

    if(!req.body.email) {
        res.json({
            code: 400,
            message: "Vui lòng nhập email!"
        });
        return;
    }

    if(!req.body.password) {
        res.json({
            code: 400,
            message: "Vui lòng nhập password!"
        });
        return;
    }
    next();
}

module.exports.loginPost = (req, res, next) => {
    if(!req.body.email) {
        res.json({
            code: 400,
            message: "Vui lòng nhập email!"
        });
        return;
    }

    if(!req.body.password) {
        res.json({
            code: 400,
            message: "Vui lòng nhập password!"
        });
        return;
    }
    next();
}