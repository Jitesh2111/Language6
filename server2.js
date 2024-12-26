const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const passport = require("./auth");

const PersonRoutes = require("./Routes/PersonRoutes");
const PORT = process.env.PORT || 3000;

const bodyParse = require("body-parser");
app.use(bodyParse.json());

//Middleware Function
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`
  );
  next();
};

app.use(passport.initialize());
app.use(logRequest);

const LocalAuthMiddleware = passport.authenticate("local", { session: false });
app.get("/", LocalAuthMiddleware, function (req, res) {
  res.send("Hello World");
});

app.use("/person",  PersonRoutes);

app.listen(PORT);
