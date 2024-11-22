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
        <Link to="/review" className="w-full h-[100svh] flex ">
          <div className="mx-auto flex items-center justify-center flex-col">
            <div className="flex justify-center items-center h-auto w-full flex-">
              {/* <video
                autoPlay
                loop
                muted
                className="w-full max-w-4xl h-auto object-cover"
              >
                <source src="/assets/robotConstruct.mp4" type="video/mp4" />
              </video> */}
              <img src="/assets/workingRobot.gif" alt="" />
            </div>

            <h1 className="font-bold text-center px-4 fong-syne text-xl md:text-5xl">
              Dishpal AI is under construction. 
            </h1>
            <p className="text-lg mt-2">Click any where on the screen to go to the review website</p>
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
