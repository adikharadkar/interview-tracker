const GenerateHash = require("../utils/GenerateHash");
const GenerateAuthToken = require("../utils/GenerateAuthToken");
const User = require("../models/User");

async function CreateUser(req, res) {
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
    const token = GenerateAuthToken(createdUser);
    return res.status(201).json({
      message: "User created successfully",
      user: { firstName, lastName, email },
      token,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
}

async function LoginUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password" });
  }

  try {
    const user = await User.findOne().where("email").equals(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { _, hashedPassword } = await GenerateHash(password, user.salt);
    if (hashedPassword !== user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = GenerateAuthToken(user);
    return res.status(200).json({
      message: "Login successful",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = { CreateUser, LoginUser };
