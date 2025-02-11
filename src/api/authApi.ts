import axiosInstance from "@/api/axiosClient";
import { loginCredentials, RegisterUserData } from "@/types";
import { TokenResponse } from "@react-oauth/google";
import axios from "axios";

export const loginUserService = async (credentials: loginCredentials) => {
  try {
    const response = await axiosInstance.post(
      "/api/authentication/v1/login/",
      credentials
    );
    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};

// POST: Register a new user.
export const registerUserService = async (data: RegisterUserData): Promise<any> => {
  const response = await axiosInstance.post(
    "/api/authentication/v1/register/",
    data
  );
  return response.data;
};

export const tokenRefresh = async (refresh: string) => {
  const response = await axiosInstance.post(
    "/api/authentication/v1/token/refresh/",
    { refresh }
  );
  return response;
};

// GET: Obtain a guest token.
export const getGuestToken = async () => {
  const response = await axiosInstance.get(
    "/api/authentication/v1/guest-token/"
  );
  return response.data;
};

// GET: Fetch user information.
export const getUserInfo = async () => {
  const response = await axiosInstance.get("/api/authentication/v1/user-info/");
  return response.data;
};

// GET: Fetch user profile.
export const getUserProfile = async () => {
  const response = await axiosInstance.get(
    "/api/authentication/v1/user-profile/"
  );
  return response.data;
};

// POST: Additional user registration endpoint.
export const userRegistration = async (data: any) => {
  const response = await axiosInstance.post(
    "/api/authentication/v1/user-registration/",
    data
  );
  return response.data;
};

export const axiosGoogleLogin = async (tokenResponse: TokenResponse) => {
  const { data } = await axios.get(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
    }
  );
  return data;
};
