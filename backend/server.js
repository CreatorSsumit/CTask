const mongoose = require("mongoose");
const express = require("express");
const router = express.Router()
const cors = require("cors");
const passport = require("passport");
var localStrategy = require("passport-local");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
var expresssession = require("express-session");
var flash = require('connect-flash')
const bodyParser = require("body-parser");
const User = require("./user");
const Admin = require("./admin");
const mongosseConfigRouter = require('./userroute');
const mongooseconfig = require('./userroute');
passport.use(new localStrategy(mongosseConfigRouter.authenticate()));
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);

// mongodb+srv://capgemini:capgemini@cluster0.wxqs3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//----------------------------------------- END OF IMPORTS---------------------------------------------------




// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





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
passport.serializeUser(mongosseConfigRouter.serializeUser());
passport.deserializeUser(mongosseConfigRouter.deserializeUser());






//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes

app.post("/login/User", passport.authenticate('local', { successRedirect: '/profileuser', failureRedirect: '/loginuser', failureFlash: true }), function (req, res, next) { });
app.post("/login/Admin", passport.authenticate('local', { successRedirect: '/profileadmin', failureRedirect: '/loginadmin', failureFlash: true }), function (req, res, next) { });


app.get('/loginuser', function (req, res, next) {
  const errors = req.flash().error || [];
  if (req.isAuthenticated()) {
    res.redirect('/profileuser');
    res.end()
  } else {
    console.log('errors', errors)
    res.json({ errors });
    res.end()
  }
});
app.get('/loginadmin', function (req, res, next) {
  const errors = req.flash().error || [];
  if (req.isAuthenticated()) {
    res.redirect('/profileadmin');
    res.end()
  } else {
    console.log('errors', errors)
    res.json({ errors })
    res.end()
  }
});


app.get("/profileuser", isLoggedIn, function (req, res) {

  User.findOne({ username: req.session.passport.user }).then(e => {
    res.json({ data: e, isAuthenticate: true, msg: 'Authenticated Successfully', who: 'user' });
    res.end();
  }).catch(e => {
    res.json({ error: "No User Exists , Do Register" });
    res.end();
  })


})


app.get("/profileadmin", isLoggedIn, function (req, res) {

  Admin.findOne({ username: req.session.passport.user }).then(e => {
    if (e === null || undefined) {
      res.json({ error: "No Admin Exists , Do Register" });
      res.end();
    } else {
      res.json({ data: e, isAuthenticate: true, msg: 'Authenticated Successfully', who: 'admin' })
      res.end();
    }


  }).catch(e => {

    res.json({ error: "No Admin Exists , Do Register" });
    res.end();
  })


})




app.post("/register/user", (req, res) => {


  var config = new mongooseconfig({
    username: req.body.username,
  })
  mongooseconfig.register(config, req.body.password)
    .then(function (err) {
      passport.authenticate('local')(req, res, function () {
        User.create({
          name: 'sumit',
          username: req.body.username,
          date: new Date(),
          email: req.body.username,
          htmlquiz: { type: 'html', status: true },
          jsquiz: { type: 'js', status: false },
          cplusplusquiz: { type: 'cplusplus', status: true },
          pythonquiz: { type: 'python', status: false },
          test: []


        }).then(e => {
          res.json({ data: req.user, isAuthenticate: true, msg: 'Thanku for Register . Go to login page' });
          res.end();
        })
      })
    }).catch(function (e) {
      res.json({ error: e.message });
      res.end();

    })


});



app.post("/register/admin", (req, res) => {

  var config = new mongooseconfig({
    username: req.body.username,
  })
  mongooseconfig.register(config, req.body.password)
    .then(function (err) {
      passport.authenticate('local')(req, res, function () {
        Admin.create({
          name: 'Admin',
          email: req.body.username,
          username: req.body.username,
        }).then(e => {
          res.json({ data: req.user, isAuthenticate: true, msg: 'New Admin Created' });
          res.end();
        })
      })
    }).catch(function (e) {
      res.json({ error: e.message });
      res.end();

    })



  // Admin.findOne({ username: req.body.username }, async (err, doc) => {
  //   if (err) throw err;
  //   if (doc) res.json({ error: "User Already Exists" }); res.end();
  //   if (!doc) {
  //     const hashedPassword = await bcrypt.hash(req.body.password, 10);

  //     const newUser = new Admin({
  //       name: 'Admin',
  //       email: req.body.username,
  //       username: req.body.username,
  //       password: hashedPassword,
  //     });


  //     await newUser.save();

  //     res.json({ data: req.user, isAuthenticate: true, msg: 'New Admin Created' })
  //     res.end();
  //   }
  // });
});




app.get("/alluserkeyvalue", (req, res) => {



  User.find().then(alldata => {



    if (alldata) {
      var count = {};
      if (alldata) {
        var a = alldata.reverse().map((e, index) => new Date(e.date).toLocaleDateString());

        a.forEach(function (i) { count[i] = (count[i] || 0) + 1; })
        res.status(200).json({ count, alldata });
        res.end();
      }

    }


  })



})


app.post("/sendpoint", (req, res) => {

  console.log(req.body)
  var { point, type } = req.body



  User.findOne({ username: req.user.username }).then(resp => {

    var date = new Date();
    var a = date.toLocaleDateString();



    var test = {
      date: a,
      type: type,
      point: point
    }

    resp.test.push(test);
    resp.save().then(e => {

      res.json({ data: e, isAuthenticate: true, msg: 'Submitted Successfully' })
      res.end();
    })

  }).catch(e => {
    res.json({ error: 'do login again, user not found', isAuthenticated: false });
    res.end();
  })

})



app.get("/logout", (req, res) => {
  req.logout()
  res.end();

});

app.get('/user', (req, res) => {
  res.send(req.user);

  res.end();
});






// function //


function isLoggedIn(req, res, next) {

  if (req.isAuthenticated()) {
    return next();
  } else {
    res.json({ error: 'do login again, user not found', isAuthenticated: false });
    res.end()
  }

}
app.use('/config', mongooseconfig);
//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(4000, () => {
  console.log("Server Has Started");
});
