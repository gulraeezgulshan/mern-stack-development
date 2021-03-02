const express = require("express");

const app = express();

//Http Lifecycle /Http Pipeline

function middleware1(req, res, next) {
  //res.send("<h1>Hello Middleware 1</h1>");
  console.log("Hello Middleware 1");
  req.profile = { id: 1, name: "Gulraiz" };
  next();
}

function middleware2(req, res, next) {
  console.log("Hello Middleware 2");
  console.log(req.profile.name);
  next();
}

app.use(middleware2);
app.use(middleware1);
;

function homeCallback(req, res) {
  console.log("Hello Home Middleware 2");
  res.send(`<h1>Hello Express</h1>
            <h1>ID: ${req.profile.id}</h1>
            <h2>Name: ${req.profile.name}</h2>`);
}

app.get("/", homeCallback);

app.listen(4200);
