const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  dateApplied: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  jobLink: {
    type: String,
  },
  salaryRange: {
    type: String,
  },
  comments: {
    type: String,
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model("Application", ApplicationSchema);
