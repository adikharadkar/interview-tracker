const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function GenerateAuthToken(user) {
  const payload = {
    id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  };
  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
  return token;
}

module.exports = GenerateAuthToken;
