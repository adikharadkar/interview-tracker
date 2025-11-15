import { useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Cookies from "js-cookie";

import ValidateField from "../utils/ValidateField";
import "../styles/ApplicationForm.css";

interface IProps {
  companyName: String;
  role: String;
  jobLink?: String;
  status: String;
  dateApplied: String;
  location?: String;
  salaryRange?: String;
  comments?: String;
}

const ApplicationForm = ({
  onOpen,
}: {
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [applicationData, setApplicationData] = useState<IProps>({
    companyName: "",
    role: "",
    jobLink: "",
    status: "",
    dateApplied: "",
    location: "",
    salaryRange: "",
    comments: "",
  });

  const [errors, setErrors] = useState<IProps>({
    companyName: "",
    role: "",
    status: "",
    dateApplied: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: SelectChangeEvent<String>) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors: IProps = {
      companyName: "",
      role: "",
      status: "",
      dateApplied: "",
    };
    let isValid = true;

    newErrors.companyName = ValidateField(
      "companyName",
      applicationData.companyName
    );
    newErrors.role = ValidateField("role", applicationData.role);
    newErrors.status = ValidateField("status", applicationData.status);
    newErrors.dateApplied = ValidateField(
      "dateApplied",
      applicationData.dateApplied
    );

    if (
      newErrors.companyName ||
      newErrors.role ||
      newErrors.status ||
      newErrors.dateApplied
    ) {
      isValid = false;
    }

    setErrors(newErrors);
    console.log(errors);
    console.log(applicationData);
    console.log(isValid);
    return isValid;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log(Cookies.get("token"));
        const response = await fetch(
          "http://localhost:5000/application/add-application",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
            body: JSON.stringify(applicationData),
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
        const data = await response.json();
        setApplicationData({
          companyName: "",
          role: "",
          jobLink: "",
          status: "",
          dateApplied: "",
          location: "",
          salaryRange: "",
          comments: "",
        });
        onOpen(false);
        console.log(data);
      } catch (err) {
        console.error("Request failed:", err);
      }
    }
  };

  return (
    <Box display="flex" flexDirection="column" margin="30px" gap={3}>
      <Box className="InputBox">
        <InputLabel id="companyNameLabel">Company Name *</InputLabel>
        <TextField
          id="companyName"
          variant="outlined"
          placeholder="e.g., Google"
          value={applicationData.companyName}
          name="companyName"
          onChange={handleChange}
          helperText={errors.companyName}
          error={!!errors.companyName}
        />
      </Box>
      <Box className="InputBox">
        <InputLabel id="roleLabel">Role *</InputLabel>
        <TextField
          variant="outlined"
          id="role"
          placeholder="e.g., Frontend Developer"
          value={applicationData.role}
          name="role"
          onChange={handleChange}
          helperText={errors.role}
          error={!!errors.role}
        />
      </Box>
      <Box className="InputBox">
        <InputLabel id="jobLinkLabel">Job Link</InputLabel>
        <TextField
          variant="outlined"
          id="jobLink"
          placeholder="https:// ..."
          name="jobLink"
          value={applicationData.jobLink}
          onChange={handleChange}
        />
      </Box>
      <Box className="InputBox">
        <InputLabel id="statusLabel">Status *</InputLabel>
        <Select
          MenuProps={{ disableScrollLock: true }}
          value={applicationData.status}
          name="status"
          id="status"
          //   defaultValue="Applied"
          onChange={handleSelectChange}
          data-testid="statusInput"
        >
          <MenuItem value="Applied">Applied</MenuItem>
          <MenuItem value="Interviewing">Interviewing</MenuItem>
          <MenuItem value="Offer">Offer</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      </Box>
      <Box className="InputBox">
        <InputLabel id="dateAppliedLabel">Date Applied *</InputLabel>
        <TextField
          type="date"
          variant="outlined"
          id="dateApplied"
          placeholder="Pick a date"
          value={applicationData.dateApplied}
          name="dateApplied"
          onChange={handleChange}
          helperText={errors.dateApplied}
          error={!!errors.dateApplied}
        />
      </Box>
      <Box className="InputBox">
        <InputLabel id="locationLabel">Location</InputLabel>
        <TextField
          id="location"
          name="location"
          variant="outlined"
          placeholder="e.g., Pune, Maharashtra (Onsite)"
          value={applicationData.location}
          onChange={handleChange}
        />
      </Box>
      <Box className="InputBox">
        <InputLabel id="salaryRangeLabel">Salary Range</InputLabel>
        <TextField
          id="salaryRange"
          name="salaryRange"
          variant="outlined"
          placeholder="e.g., Rs. 9.5L - Rs. 11L"
          value={applicationData.salaryRange}
          onChange={handleChange}
        />
      </Box>
      <Box className="InputBox">
        <InputLabel id="commentsLabel">Comments</InputLabel>
        <TextField
          id="comments"
          name="comments"
          variant="outlined"
          multiline
          rows={4}
          placeholder="Add any additional notes..."
          value={applicationData.comments}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="contained"
        onClick={handleSubmit}
        data-testid="submitApplicationBtn"
      >
        <AddIcon />
        <Typography
          sx={{ fontWeight: "bold", fontSize: "14px" }}
          variant="body1"
        >
          Add Application
        </Typography>
      </Button>
    </Box>
  );
};

export default ApplicationForm;
