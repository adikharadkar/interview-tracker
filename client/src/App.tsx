import { Box, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Cookies from "js-cookie";

import "./App.css";
import Sidebar from "./components/Sidebar";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Application from "./pages/Application";
import ApplicationForm from "./components/ApplicationForm";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Navbar onOpen={setIsOpen} />
      {Cookies.get("token") && (
        <Sidebar isOpen={isOpen}>
          <Box
            display="flex"
            justifyContent="space-between"
            margin="30px"
            alignItems="center"
          >
            <Typography variant="h5">Add Application</Typography>
            <CloseIcon
              sx={{ cursor: "pointer" }}
              onClick={() => setIsOpen(false)}
            />
          </Box>
          <ApplicationForm onOpen={setIsOpen} />
        </Sidebar>
      )}
      <Box
        className={isOpen ? "backdrop open" : "backdrop"}
        onClick={() => setIsOpen(false)}
      ></Box>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/application/:id" element={<Application />} />
      </Routes>
    </>
  );
}

export default App;
