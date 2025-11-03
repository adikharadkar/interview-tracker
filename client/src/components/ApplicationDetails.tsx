import { Box, Button, Typography } from "@mui/material";

import GetStatusStyles from "../utils/GetStatusStyles";
import type { TableDataProps } from "../utils/constants";

const ApplicationDetails = ({ data }: { data: TableDataProps }) => {
  return (
    <Box
      width="60vw"
      margin="auto"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{data.role}</Typography>
        <Typography
          sx={{
            ...GetStatusStyles(data.status),
            padding: "5px",
            borderRadius: "5px",
            display: "inline-block",
            px: "15px",
          }}
        >
          {data.status}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" color="secondary">
          {data.companyName}
        </Typography>
        <Typography>{data.location}</Typography>
      </Box>
      <Box width="100%" margin="auto" gap={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Date Applied</Typography>
            <Typography>{data.dateApplied}</Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Salary Range</Typography>
            <Typography>{data.salaryRange}</Typography>
          </Box>
        </Box>
      </Box>
      <Button variant="outlined">View Job Posting</Button>
      <Box
        display="flex"
        justifyContent="space-between"
        gap={2}
        flexDirection="row"
      >
        <Button variant="contained">Edit Application</Button>
        <Button variant="contained">Delete Application</Button>
      </Box>
    </Box>
  );
};

export default ApplicationDetails;
