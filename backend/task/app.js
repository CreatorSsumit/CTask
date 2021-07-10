var createError = require('http-error');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expresssession = require("express-session");
var passport = require("passport");
const https = require("https");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Users = require('./routes/users');
var flash = require('connect-flash');
var cors = require('cors')
var app = express();
app.use(cors())


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expresssession({
  resave: false,
  saveUninitialized: false,
  secret: "sumit"

}));


app.use(flash())

app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
})
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());





app.use('/', indexRouter)

app.use('/users', usersRouter);



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