import axios, { AxiosError, AxiosHeaders } from "axios";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000"
      : "https://foothubapi.fahminurkamil.tech",
});

api.interceptors.request.use((config) => {
  config.withCredentials = true;
  const token = useAuthStore.getState().accessToken;

  if (token) {
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const err = error as AxiosError<{ message: string }>;
    if (err.response?.data && err.response.status === 401) {
      useAuthStore.getState().onLogout();
      toast.error(err.response.data.message || "Token Expired please login");
    }
    return Promise.reject(error);
  }
);

export default api;
