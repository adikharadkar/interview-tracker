import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import { Link as NavLink } from "react-router-dom";

import type { TableDataProps } from "../utils/constants";
import GetStatusStyles from "../utils/GetStatusStyles";
import "../styles/TableContainer.css";

interface IProps {
  tableData: TableDataProps[];
}

const ApplicationsTable = ({ tableData }: IProps) => {
  return (
    <TableContainer className="table_container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Company</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Job Link</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Salary Range</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data) => (
            <TableRow
              key={data._id}
              sx={{
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                transition: "background-color 0.2 ease",
              }}
            >
              <TableCell sx={{ fontWeight: "bold" }}>
                {data.companyName}
              </TableCell>
              <TableCell>{data.role}</TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
                <Link href={data.jobLink} target="_blank">
                  Job Link
                </Link>
              </TableCell>
              <TableCell>{data.salaryRange}</TableCell>
              <TableCell>{data.location}</TableCell>
              <TableCell>
                <NavLink to={`/application/${data._id}`}>
                  View Application
                </NavLink>
              </TableCell>
              <TableCell align="right">{data.dateApplied}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ApplicationsTable;
