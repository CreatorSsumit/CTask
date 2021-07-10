var express = require('express');
var router = express.Router();
var passport = require('passport');
var localStrategy = require("passport-local");
var cc = require("./users");
passport.use(new localStrategy(cc.authenticate()
  // (req, username, password, authCheckDone) => {
  //     cc.findOne({ username }).then(user => {
  //         if (!user) {
  //             return authCheckDone(null, false, req.flash('error', 'User not found, Register yourself'));
  //         }
  //         if (user.password != password) {
  //             return authCheckDone(null, false, req.flash('error', 'Password is incorrect'))
  //         }
  //         return authCheckDone(null, user)
  //     })
  // }
));

/* GET home page. */


router.post("/signup", function (req, res, next) {

  console.log(req.body)

  var user = new cc({
    name: 'Sumit',
    username: req.body.username,
    email: req.body.username,
  })

  cc.register(user, req.body.password)
    .then(function (err) {

      passport.authenticate('local')(req, res, function (e) {

        cc.findOne({ username: req.session.passport.user }).then(function (data) {
          res.redirect('/profile')

        })


      })


    }).catch(function (e) {

      res.json({ 'error': e.message });

    })



}


);


router.post("/login", passport.authenticate('local', { successRedirect: '/profile', failureRedirect: '/login', failureFlash: true }), function (req, res, next) {

});





router.get("/profile", function (req, res) {
  console.log('gfcvbc')
  if (req.isAuthenticated()) {
    console.log('a')
  } else {
    console.log("b")
  }
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/")
  }
}

router.get('/login', (req, res) => {
  console.log('login')
})


module.exports = router;
