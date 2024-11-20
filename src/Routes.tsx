import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Home from "./pages/Home";
import Dashboard from "./dashboard/Dashboard";
import Profile from "./dashboard/Profile";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <div className="w-full h-screen ">
          <img
            src="/assets/website-under-construction.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      }
    />
    <Route path="/review" element={<Home />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
