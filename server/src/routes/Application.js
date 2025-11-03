const express = require("express");
const ExtractAuthToken = require("../middlewares/ExtractAuthToken");
const {
  AddApplication,
  GetAllApplications,
  ViewApplication,
} = require("../controllers/Application");

const router = express.Router();
// router.use(ExtractAuthToken);

router.post("/add-application", AddApplication);
router.get("/get-all-applications", GetAllApplications);
router.get("/:id", ViewApplication);

module.exports = router;
