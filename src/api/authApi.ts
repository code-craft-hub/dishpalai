import axiosInstance from "@/api/axiosClient";
import { loginCredentials, RegisterUserData } from "@/types";
import { TokenResponse } from "@react-oauth/google";
import axios from "axios";

export const loginService = async (credentials: loginCredentials) => {
  const response = await axiosInstance.post(
    "/api/authentication/v1/login/",
    credentials
  );
  return response.data;
  try {
  } catch (error: any) {
    console.error(error.data);
    throw new Error(error);
  }
};

// POST: Register a new user.
export const register = async (data: RegisterUserData): Promise<any> => {
  const response = await axiosInstance.post(
    "/api/authentication/v1/register/",
    data
  );
  return response.data;
  try {
  } catch (error: any) {
    console.error(error.data);
    throw new Error(error);
  }
};

export const tokenRefresh = async (refresh: string) => {
  const response = await axiosInstance.post(
    "/api/authentication/v1/token/refresh/",
    { refresh }
  );
  return response;
  try {
  } catch (error: any) {
    console.error(error.data);
    throw new Error(error);
  }
};

// GET: Obtain a guest token.
export const getGuestToken = async () => {
  const response = await axiosInstance.get(
    "/api/authentication/v1/guest-token/"
  );
  return response.data;
  try {
  } catch (error: any) {
    console.error(error.data);
    throw new Error(error);
  }
};

// GET: Fetch user information.
export const getUserInfo = async () => {
  const response = await axiosInstance.get("/api/authentication/v1/user-info/");
  return response.data;
  try {
  } catch (error: any) {
    console.error(error.data);
    throw new Error(error);
  }
};

// GET: Fetch user profile.
export const getUserProfile = async () => {
  const response = await axiosInstance.get(
    "/api/authentication/v1/user-profile/"
  );
  return response.data;
  try {
  } catch (error: any) {
    console.error(error.data);
    throw new Error(error);
  }
};

// POST: Additional user registration endpoint.
export const userRegistration = async (data: any) => {
  const response = await axiosInstance.post(
    "/api/authentication/v1/user-registration/",
    data
  );
  return response.data;
  try {
  } catch (error: any) {
    console.error(error.data);
    throw new Error(error);
  }
};

export const axiosGoogleLogin = async (tokenResponse: TokenResponse) => {
  const { data } = await axios.get(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
    }
  );
  return data;
  try {
  } catch (error: any) {
    console.error(error.data);
    throw new Error(error);
  }
};
