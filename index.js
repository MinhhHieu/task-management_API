const express = require("express");
const bodyPaser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const database = require("./config/database");
require("dotenv").config();

const routesApiVer1 = require("./api/v1/routes/index.route");

const app = express();
const port = process.env.PORT;

app.use(cors());

database.connect();

app.use(cookieParser());

app.use(bodyPaser.json());

routesApiVer1(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});