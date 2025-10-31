import { PieChart } from "@mui/x-charts/PieChart";

import GetPieData from "../utils/GetPieData";
import type { TableDataProps } from "../utils/constants";

interface IProps {
  applications: TableDataProps[];
}

const BasicPie = (props: IProps) => {
  return (
    <PieChart
      series={[
        {
          data: GetPieData(props.applications),
        },
      ]}
      width={200}
      height={200}
      sx={{
        border: "1px solid #ccc",
        padding: "30px",
        display: "inline-flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    />
  );
};

export default BasicPie;
