const express = require("express");
const mongoose = require("mongoose");
const app = express();
const indexRouter = require("./routes/index");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); // 이게 있어야 req.body가 객체로 인식됨
app.use(bodyParser.json()); // 이게 있어야 req.body가 객체로 인식됨

app.use("/api", indexRouter);
const mongoURI = `mongodb://localhost:27017/todo`;
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log("DB connection fail", err));

app.listen(5000, () => {
  console.log("server on at 5000");
});
