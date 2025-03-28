import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protected";
import Dashboard from "./dashboard";
import Login from "./login";
import CreateLetter from "./CreateLetter";
import UploadToDrive from "./uploadToDrive";

function App() {
  return (
    <Router>
      <Routes>
        {/* Protected routes - Only accessible if logged in */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editor"
          element={
            <ProtectedRoute>
              <CreateLetter />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadToDrive />
            </ProtectedRoute>
          }
        />

        {/* Public route - Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
