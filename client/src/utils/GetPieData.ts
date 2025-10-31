import type { TableDataProps, PieDataProps } from "./constants";

export default function GetPieData(applications: TableDataProps[]) {
  const map = new Map();
  for (const application of applications) {
    if (map.has(application.status)) {
      map.set(application.status, map.get(application.status) + 1);
    } else {
      map.set(application.status, 1);
    }
  }

  const pieData: any = [];
  for (const [key, value] of map) {
    let obj: PieDataProps = { id: pieData.length, value: value, label: key };
    if (key === "Applied") {
      pieData.push({ ...obj, color: "blue" });
    } else if (key === "Interviewing") {
      pieData.push({ ...obj, color: "orange" });
    } else if (key === "Rejected") {
      pieData.push({ ...obj, color: "red" });
    } else {
      pieData.push({ ...obj, color: "green" });
    }
  }

  return pieData;
}
