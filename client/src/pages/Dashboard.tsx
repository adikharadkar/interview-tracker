import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";

import Navbar from "../components/Navbar";
import Tile from "../components/Tile";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/auth");
      return;
    }
    console.log("Dashboard token:", token);
  }, []);

  return (
    <div>
      <Navbar />
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
    </div>
  );
};

export default Dashboard;
