const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./user");
const Admin = require("./admin");
const app = express();
app.use(cors());

// mongodb+srv://capgemini:capgemini@cluster0.wxqs3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose.connect(
  'mongodb://localhost/cap', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
  () => {
    console.log("Mongoose Is Connected");
  }
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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


//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes
app.post("/login/:user", (req, res, next) => {

  var id = req.params.user;


  if (id === 'User') {

    require("./userpassportConfig")(passport);
    console.log('user', id)
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.json({ error: "No User Exists , Do Register" });
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.json({ data: req.user, isAuthenticate: true, msg: 'Authenticated Successfully', who: 'user' })

        });
      }
    })(req, res, next);
  }
  if (id === 'Admin') {

    require("./adminpassportConfig")(passport);
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.json({ error: "No Admin Exists , Do Register " });
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.json({ data: req.user, isAuthenticate: true, msg: 'Authenticated Successfully', who: 'admin' })

        });
      }
    })(req, res, next);
  }

});



app.post("/register/user", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.json({ error: "User Already Exists" });
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        name: 'sumit',
        email: req.body.username,
        username: req.body.username,
        password: hashedPassword,
      });


      await newUser.save();

      res.json({ data: req.user, isAuthenticate: true, msg: 'Authenticated Successfully' })

    }
  });
});



app.post("/register/admin", (req, res) => {
  Admin.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.json({ error: "User Already Exists" });
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new Admin({
        name: 'Admin',
        email: req.body.username,
        username: req.body.username,
        password: hashedPassword,
      });


      await newUser.save();

      res.json({ data: req.user, isAuthenticate: true, msg: 'New Admin Created' })

    }
  });
});









app.get("/logout", (req, res) => {

  req.logOut();
  res.send()

});
//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(4000, () => {
  console.log("Server Has Started");
});
