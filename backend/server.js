const mongoose = require("mongoose");
const express = require("express");
const router = express.Router()
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
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);

// mongodb+srv://capgemini:capgemini@cluster0.wxqs3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose.connect(
  'mongodb+srv://capgemini:capgemini@cluster0.wxqs3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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
      if (!user) res.json({ error: "No Admin Exists , Do Register" });
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
        htmlquiz: { type: 'html', status: true },
        jsquiz: { type: 'js', status: false },
        cplusplusquiz: { type: 'cplusplus', status: true },
        pythonquiz: { type: 'python', status: false },
        date: new Date()
      });


      await newUser.save();

      res.json({ data: req.user, isAuthenticate: true, msg: 'Thanku for Register . Go to login page' })

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




app.get("/alluserkeyvalue", (req, res) => {



  User.find().then(alldata => {



    if (alldata) {
      var count = {};
      if (alldata) {
        var a = alldata.reverse().map((e, index) => new Date(e.date).toLocaleDateString());

        a.forEach(function (i) { count[i] = (count[i] || 0) + 1; })
        res.status(200).json({ count, alldata })
      }

    }


  })



})


app.post("/sendpoint", (req, res) => {
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

    })

  }).catch(e => {
    res.json({ error: 'do login again, user not found', isAuthenticated: false })
  })

})



app.get("/logout", (req, res) => {
  req.logout()
  res.end();

});

app.get('/user', (req, res) => {
  res.send(req.user)
})
//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(4000, () => {
  console.log("Server Has Started");
});
