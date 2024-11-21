import { Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Home from "./pages/Home";
import Dashboard from "./dashboard/Dashboard";
import Profile from "./dashboard/Profile";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Link to="/review" className="w-full h-screen flex">
          <div className=" mx-auto ">
            <div className="flex justify-center items-center h-auto w-full ">
              <video
                autoPlay
                loop
                muted
                className="w-full max-w-4xl h-auto object-cover"
              >
                <source src="/assets/robotConstruct.mp4" type="video/mp4" />
              </video>
            </div>

            <h1 className="font-bold text-center px-4 fong-syne text-xl md:text-5xl">
              Dishpal AI is under construction.
            </h1>
          </div>
        </Link>
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
