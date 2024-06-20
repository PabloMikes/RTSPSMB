const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors")
mongoose
.connect('mongodb+srv://admin:adminadmin@cluster0.kpilyk8.mongodb.net/mongodbpoodpo?retryWrites=true&w=majority')
.then(() => console.log("Database connected"))
.catch((error) => console.log(error));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const phonesRouter = require('./routes/phones');
const carsRouter = require('./routes/cars');

const newsRouter = require('./routes/news');
const teachersRouter = require('./routes/teachers');
const lunchesRouter = require('./routes/lunches');
const commentsRouter = require('./routes/comments');
const accountsRouter = require('./routes/accounts');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/phones", phonesRouter);
app.use("/cars", carsRouter);


app.use("/news", newsRouter);
app.use("/teachers", teachersRouter);
app.use("/lunches", lunchesRouter);
app.use("/comments", commentsRouter);
app.use("/accounts", accountsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
