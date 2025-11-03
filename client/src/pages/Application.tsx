import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import ApplicationDetails from "../components/ApplicationDetails";
import type { TableDataProps } from "../utils/constants";

const Application = () => {
  const { id } = useParams();
  const [data, setData] = useState<TableDataProps>({
    _id: id,
    companyName: "",
    role: "",
    status: "Applied",
    location: "",
    salaryRange: "",
    comments: "",
    dateApplied: "",
    jobLink: "",
  });

  const fetchApplicationDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/application/${id}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      console.log(data);
      setData(data.application);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchApplicationDetails();
  }, []);
  console.log(id);
  return (
    <Box>
      <ApplicationDetails data={data} />
    </Box>
  );
};

export default Application;
