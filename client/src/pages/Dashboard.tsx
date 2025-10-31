import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

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
    </div>
  );
};

export default Dashboard;
