import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/auth");
  };

  return (
    <nav className="navbar">
      <div className="navbar__header">
        <h2 className="navbar__title">Interview Tracker</h2>
      </div>
      <ul className="navbar__items">
        <li className="navbar__add_application">
          <button>Add Application</button>
        </li>
        <li className="navbar__logout">
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
