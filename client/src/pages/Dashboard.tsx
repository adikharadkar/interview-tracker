import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";

import Tile from "../components/Tile";
import ApplicationsTable from "../components/ApplicationsTable";
// import { applications } from "../utils/constants";
import "../styles/Dashboard.css";
import BasicPie from "../components/BasicPie";

const Dashboard = () => {
  const [applicationData, setApplicationData] = useState([]);

  const fetchApplicationDetails = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/application/get-all-applications",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      setApplicationData(data.applications);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(applicationData);

  useEffect(() => {
    fetchApplicationDetails();
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/auth");
      return;
    }
  }, []);

  return (
    <div>
      <div className="content">
        <div className="dashboard__tiles">
          <Tile
            tileName="Total Applications"
            applicationCount={applicationData.length}
            icon={<FiBookmark size={24} />}
          />
          <Tile
            tileName="Interviews Scheduled"
            applicationCount={25}
            icon={<FiBookmark size={24} />}
          />
          <Tile
            tileName="Total Applications"
            applicationCount={25}
            icon={<FiBookmark size={24} />}
          />
          <Tile
            tileName="Total Applications"
            applicationCount={25}
            icon={<FiBookmark size={24} />}
          />
        </div>
        <ApplicationsTable tableData={applicationData} />
        <BasicPie applications={applicationData} />
      </div>
    </div>
  );
};

export default Dashboard;
