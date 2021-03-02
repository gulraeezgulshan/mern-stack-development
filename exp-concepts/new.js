const express = require("express");
const app = express();

const middleware1 = (req, res, next) => {
  console.log("Hello Middleware 1");
  //res.send("Hello Middleware 1");
  next();
};

const middleware2 = (req, res) => {
  console.log("Hello Middleware 2");
  res.send("Hello Middleware 2");
};

app.use(middleware2);
app.use(middleware1);

const standardmiddleware = (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
};

app.get("/", standardmiddleware);

app.listen(5000);
