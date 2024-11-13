import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

const isAuthenticated = false;

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;