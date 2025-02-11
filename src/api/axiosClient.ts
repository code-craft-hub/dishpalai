import axios from "axios";
import Cookies from "js-cookie";
import { tokenRefresh } from "@/api/authApi";
import { queryClient } from "@/providers/queryclientProvider";

const apiUrl = import.meta.env.VITE_API_URL ?? "https://dishpal-coupon-backend.vercel.app";

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("access");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;

api.interceptors.response.use(
  (response) => {
    if (response?.data?.access) {
      Cookies.set("access", response?.data?.access, { expires: 1, path: "/" });
      Cookies.set("refresh", response?.data?.refresh, {
        expires: 1,
        path: "/",
      });
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest._retry) {
      const refresh = Cookies.get("refresh");
      if (!refresh || isRefreshing) {
        return Promise.reject(error);
      }
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await tokenRefresh(refresh);
        if (response?.data.access) {
          Cookies.set("access", response?.data?.access, {
            expires: 1,
            path: "/",
          });
          Cookies.set("refresh", response?.data?.refresh, {
            expires: 1,
            path: "/",
          });
          queryClient.invalidateQueries({ queryKey: ["userInfo"] });
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${response?.data?.access}`;
          // console.log("COMPLETED TOKEN REFRESHED")
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.warn("Token refresh failed:", refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    console.error("AXIOS ERROR:", error);
    return Promise.reject(error);
  }
);

export default api;
