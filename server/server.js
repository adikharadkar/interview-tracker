require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const AuthRouter = require("./src/routes/Auth");
const ApplicationRouter = require("./src/routes/Application");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL;

mongoose
  .connect(databaseUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/auth", AuthRouter);
app.use("/application", ApplicationRouter);

app.listen(port, () => {
  console.log("App running on port 5000");
});
