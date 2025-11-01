import { Box, Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Navbar onOpen={setIsOpen} />
      <Sidebar isOpen={isOpen}>
        <h1>Add Application</h1>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Sidebar>
      <Box
        className={isOpen ? "backdrop open" : "backdrop"}
        onClick={() => setIsOpen(false)}
      ></Box>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
