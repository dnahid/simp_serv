const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.send("got to /demo for getting you are alive me");
});

app.get("/demo", (req, res) => {
  res.send("I'm alive!");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
