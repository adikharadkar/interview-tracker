import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";

import Tile from "../components/Tile";
import ApplicationsTable from "../components/ApplicationsTable";
import { applications } from "../utils/constants";
import "../styles/Dashboard.css";
import BasicPie from "../components/BasicPie";

const Dashboard = () => {
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
            applicationCount={25}
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
        <ApplicationsTable tableData={applications.slice(5)} />
        <BasicPie applications={applications} />
      </div>
    </div>
  );
};

export default Dashboard;
