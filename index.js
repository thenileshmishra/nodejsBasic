const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });
require("./db/conn");

const PORT = process.env.PORT;

app.use(express.json());
// we link the router files to make our route easy
app.use(require("./router/auth"));

const User = require("./router/auth");

const middleware = (req, res, next) => {
  console.log(`Hello my Middleware`);
  next();
};

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log(`Server listening on ${PORT}`);
});
