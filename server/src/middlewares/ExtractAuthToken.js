const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function ExtractAuthToken(req, res, next) {
  try {
    const headers = req.headers;
    if (!headers) res.status(401).json({ message: "Token not found" });

    const authorizationHeader = headers["authorization"];
    if (!authorizationHeader)
      res.status(401).json({ message: "Token not found" });

    const token = authorizationHeader.split(" ")[1];
    if (!token) res.status(401).json({ message: "Token not found" });

    jwt.verify(token, JWT_SECRET_KEY, (err) => {
      if (err) res.status(403).json({ message: "Invalid token" });
    });

    next();
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = ExtractAuthToken;
