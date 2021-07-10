var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var flash = require('connect-flash');
var cors = require('cors');

var app = express();
app.use(flash())



mongoose.connect(
  'mongodb://localhost/cap', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
  () => {
    console.log("Mongoose Is Connected");
  }
);


app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to

  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.use('/', indexRouter);
app.use('/users', usersRouter);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
