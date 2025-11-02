import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import "../styles/Navbar.css";

const Navbar = ({
  onOpen,
}: {
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/auth");
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Interview Tracker</Typography>
        {Cookies.get("token") && (
          <Box display="flex" justifyContent="space-between" width="20vw">
            <Button variant="contained" onClick={() => onOpen(true)}>
              Add Application
            </Button>
            <Button variant="outlined" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
    // <nav className="navbar">
    //   <div className="navbar__header">
    //     <h2 className="navbar__title">Interview Tracker</h2>
    //   </div>
    //   <ul className="navbar__items">
    //     <li className="navbar__add_application">
    //       <button>Add Application</button>
    //     </li>
    //     <li className="navbar__logout">
    //       <button onClick={handleLogout}>Logout</button>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
