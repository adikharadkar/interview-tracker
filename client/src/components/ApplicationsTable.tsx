import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

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
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data, index) => (
            <TableRow
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  cursor: "pointer",
                },
                transition: "background-color 0.2 ease",
              }}
            >
              <TableCell sx={{ fontWeight: "bold" }}>{data.company}</TableCell>
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
              <TableCell align="right">{data.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ApplicationsTable;
