const express = require("express");
var http = require("http");
var logger = require("morgan");
const app = express();

app.use(logger("short"));

app.use(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, world!");
});

http.createServer(app).listen(4200);
