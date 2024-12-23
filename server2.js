const express = require("express");
const app = express();
const db = require("./db");

const PersonRoutes = require("./Routes/PersonRoutes")

const bodyParse = require("body-parser");
app.use(bodyParse.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use('/person', PersonRoutes)

app.listen(3000);
