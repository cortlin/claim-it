const createError = require("http-errors");
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const fs = require('fs');

const indexRouter = require("./routes/index");
const apiRouter = require("./api/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

app.use(express.static(path.join(__dirname, "pages")));

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.get("/settlement", (req, res) => {
  const data =fs.readFileSync('./contract.pdf');
  res.contentType("application/pdf");
  res.send(data);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
