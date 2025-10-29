import "./App.css";
import AuthPage from "./pages/AuthPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Interview Tracker</h1>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
