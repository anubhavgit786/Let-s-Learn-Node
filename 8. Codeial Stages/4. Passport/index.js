const debug = require("debug")("app:startup");

const dotenv = require("dotenv");
dotenv.config();

const config = require("config");
const express = require("express");
const Joi = require("joi");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");
const hostname = "localhost";
const port = process.env.PORT || 8000;
const app = express();
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const MongoStore = require('connect-mongo');

//signifies middleware : parser
app.use(express.urlencoded());
app.use(cookieParser());

//signifies middleware : static files
app.use(express.static("./assets"));

app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);


app.set("view engine", "ejs");
app.set("views", "./views");

app.use(
  session({
    name: "Codeial", // cookie name
    secret: "blahsomething", //cookie encryption
    saveUninitialized: false, 
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100, // 100 mins
    },
    store: MongoStore.create(
      {
        mongoUrl: "mongodb+srv://anubhav:anubhav@cluster0.wfdajhs.mongodb.net/codeial?retryWrites=true&w=majority",
        autoRemove: "disabled",
      },
      (err) => {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());

//set user's data
app.use(passport.setAuthenticatedUser);

app.use("/", require("./routes/index"));

//start the server
app.listen(port, hostname, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server is up and running at http://${hostname}:${port}`);
});
