const taskRoute = require("./task.route");

module.exports = (app) => {
    app.use("/", taskRoute);
}