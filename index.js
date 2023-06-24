const dotenv = require("dotenv");
const express = require("express");
const app = express();
const PORT = 8000;

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

app.get("/about", (req, res) => {
  res.send(`Hello about world from the server`);
});

app.get("/contact", (req, res) => {
  res.send(`Hello contact world from the server`);
});

app.get("/signin", (req, res) => {
  res.send(`Hello singin world from the server`);
});

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log(`Server listening on ${PORT}`);
});
