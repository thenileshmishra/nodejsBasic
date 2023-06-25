const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

router.post("/register", (req, res) => {
  //   console.log(req.body);

  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already Exist" });
      }

      const user = new User({ name, email, phone, work, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "user registered sucessfully" });
        })
        .catch((err) =>
          res.status(500).json({ error: "Failed to registered", err })
        );
    })
    .catch((err) => {
      console.log(err);
    });
});

// login route

// router.post("/signin", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ error: "Plz Filled the data" });
//     }
//   } catch (err) {
//     console.log("Error in SignIN", err);
//   }
// });

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please fill in the required data" });
    }

    // ... additional sign-in logic ...
    const userLogin = await User.findOne({ email: email });
    // If sign-in is successful, send a success response
    res.json({ success: true });
  } catch (err) {
    console.log("Error in SignIn", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/about", (req, res) => {
  res.send(`Hello about world from the server`);
});

router.get("/contact", (req, res) => {
  res.send(`Hello contact world from the server`);
});

router.get("/signin", (req, res) => {
  res.send(`Hello singin world from the server`);
});

module.exports = router;
