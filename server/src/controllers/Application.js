const Application = require("../models/Application");

async function AddApplication(req, res) {
  try {
    const newApplication = req.body;

    const createdApplication = new Application(newApplication);
    await createdApplication.save();

    return res.status(201).json({ message: "Application added successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `Internal server error - ${err}` });
  }
}

async function GetAllApplications(req, res) {
  try {
    const applications = await Application.find();
    return res.status(200).json({ message: "Success", applications });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { AddApplication, GetAllApplications };
