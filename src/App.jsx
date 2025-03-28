import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login.jsx";
import Dashboard from "./dashboard.jsx";
import CreateLetter from "./createLetter.jsx";
import UploadToDrive from "./uploadToDrive.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<CreateLetter />} />
          <Route path="/upload" element= {<UploadToDrive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
