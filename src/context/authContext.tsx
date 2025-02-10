import React, { createContext, useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { authContextDefault } from "@/constants";
import { authContextType, userT } from "@/types";
import Cookies from "js-cookie";
import { getUserInfoQuery } from "@/queries/auth-queries";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<authContextType>(authContextDefault);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<userT | null | undefined>(undefined);
  const navigate = useNavigate();
  const { isLoading, data, isFetched, isError } = getUserInfoQuery();

  useEffect(() => {
    if (data && isFetched) {
      setUser(data);
    }
    if (isError) setUser(null);
  }, [isFetched, isLoading, data]);

  const logout = () => {
    setUser(null);
    queryClient.clear();
    Cookies.remove("access", { path: "/" });
    Cookies.remove("refresh", { path: "/" });
    navigate("/auth/login", { replace: true });
  };
  const values = { user, logout, isLoading, setUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
