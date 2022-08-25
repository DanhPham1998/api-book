const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRouter = require("./routes/author");
const bookRouter = require("./routes/book");
const gettime = require("./js/DateTime");

dotenv.config();

//Connect DataBase
mongoose.connect(process.env.MONGOODB_URL, () => {
    console.log("Connected to Mogoodb");
});

//Cấu hình
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// Router
app.use("/v1/author", authorRouter);
app.use("/v1/book", bookRouter);

console.log(gettime());
app.listen(8000, () => {
    console.log("Sever is running...");
});
