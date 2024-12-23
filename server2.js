const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const PersonRoutes = require("./Routes/PersonRoutes")
const PORT = process.env.PORT || 3000;

const bodyParse = require("body-parser");
app.use(bodyParse.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use('/person', PersonRoutes)

app.listen(PORT);
