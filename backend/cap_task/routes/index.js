var express = require('express');
var router = express.Router();
var passport = require('passport');
var localStrategy = require("passport-local");
var cc = require("./users");

/* GET home page. */


router.get('/', (req, res) => {
  res.send('done')
})

router.post("/signup", (req, res) => {

  console.log(req.body)

  cc.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        name: 'sumit',
        username: req.body.username,
        password: hashedPassword,
        email: req.body.username
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});



router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.get("/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});


// router.get("/profile", function (req, res) {
//   console.log(req.user);
//   if (req.isAuthenticated()) {
//     console.log('a')
//   } else {
//     console.log("b")
//   }

//   passport.authenticate('local')(req, res, function (e) {

//     console.log('ai')
//   })
// })

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
