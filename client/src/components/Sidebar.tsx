import { Box } from "@mui/material";

import "../styles/Sidebar.css";

const Sidebar = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  return (
    <Box className={isOpen ? "sidebar open" : "sidebar"} data-testid="sidebar">
      {children}
    </Box>
  );
};

export default Sidebar;
