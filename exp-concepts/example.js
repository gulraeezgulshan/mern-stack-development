const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Testing");
});

app.listen(4500);
