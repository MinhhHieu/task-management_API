module.exports.taskEdit = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  if (!title) {
    res.json({
      code: 400,
      message: "Vui lòng nhập tiêu đề!",
    });
    return;
  }

  if (title.length < 5 || title.length > 10) {
    res.json({
      code: 400,
      message: "Tiêu đề phải từ 5 đến 10 ký tự!",
    });
    return;
  }

  if (!content) {
    res.json({
      code: 400,
      message: "Vui lòng nhập nội dung!",
    });
    return;
  }

  next();
};
