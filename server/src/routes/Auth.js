const express = require("express");

const User = require("../models/User");
const { CreateUser, LoginUser } = require("../controllers/User");

const router = express.Router();

router.post("/signup", CreateUser);

router.post("/login", LoginUser);

module.exports = router;
