const express = require("express");
const GenerateHash = require("../utils/GenerateHash");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Missing user details" });
  }
  let newSalt, newHashedPassword;
  try {
    const { salt, hashedPassword } = await GenerateHash(password);
    newSalt = salt;
    newHashedPassword = hashedPassword;
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }

  try {
    // const existingUser = await User.find({email});
    // const existingUser = await User.findOne({ email });
    const existingUser = await User.findOne().where("email").equals(email);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }

  try {
    const newUser = {
      firstName,
      lastName,
      email,
      password: newHashedPassword,
      salt: newSalt,
    };
    const createdUser = new User(newUser);
    await createdUser.save();
    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
