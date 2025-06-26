const express = require("express");
require("dotenv").config();
const database = require("./config/database");

const Task = require("./model/task.model");

const route = require("./routes/index.route");

database.connect();

const app = express();
const port = process.env.PORT;

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});