const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendfile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var age = Number(req.body.h1) / 16;
  res.send("Human age in Dog years is : " + age + " Dog years");
});
app.listen(port);
